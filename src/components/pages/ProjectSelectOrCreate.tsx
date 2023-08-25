import { Button, Flex, Card, useMantineTheme } from "@mantine/core";
import { Spacer } from "../Spacer";

import { main_template } from "../templates/template1";
import { generate_files } from "../../utilities/export-utils";
import { useState } from "react";
import {
  EntryType,
  get_directory_contents,
  open_directory,
} from "../../utilities/file-system-utils";
import { useDisclosure } from "@mantine/hooks";
import { TEMPLATE_FILENAME } from "../../constants/constants";
import { create_new_template } from "../../utilities/generic-utils";
import { ModalNoProjectFound } from "../ModalNoProjectFound";
import { ModalNewProjectSetup } from "../ModalNewProjectSetup";

/** The PROJECT STRUCTURE and OVERVIEW */
export const ProjectSelectOrCreate = () => {
  const theme = useMantineTheme();

  const [
    isOpened__new_project_modal,
    { open: open__new_project_modal, close: close__new_project_modal },
  ] = useDisclosure(false);

  const [
    isOpened__existing_project_modal,
    {
      open: open__existing_project_modal,
      close: close__existing_project_modal,
    },
  ] = useDisclosure(false);

  //   const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
  const [selected_folder, set_selected_folder] =
    useState<FileSystemDirectoryHandle>();

  const [folder_contents, set_folder_contents] = useState<EntryType[]>([]);

  const [template_file, set_template_file] = useState<EntryType>();

  const get_template_file = (folder_contents: EntryType[]) =>
    folder_contents.find((item) => item[0] === TEMPLATE_FILENAME);

  const handleClick_create_project_folder = async () => {
    // TODO: replace modal with redirect to new project page
    const directoryHandle = await open_directory();
    if (!directoryHandle) {
      return;
    }

    set_selected_folder(directoryHandle);

    const folder_contents = await get_directory_contents({ directoryHandle });
    set_folder_contents(folder_contents);

    open__new_project_modal();

    console.log("Found - handle_click_open_existing_folder", {
      directoryHandle,
      folder_contents,
    });
  };

  const handleClick_open_existing_folder = async () => {
    const directoryHandle = await open_directory();
    if (!directoryHandle) {
      return;
    }

    set_selected_folder(directoryHandle);

    const folder_contents = await get_directory_contents({ directoryHandle });
    set_folder_contents(folder_contents);

    const template_file = get_template_file(folder_contents);
    if (!template_file) {
      open__existing_project_modal();
      return;
    } else {
      set_template_file(template_file);
    }

    console.log("Found - handle_click_open_existing_folder", {
      directoryHandle,
      folder_contents,
    });
  };

  const handleClick_create_new_project = async () => {
    if (isOpened__existing_project_modal) {
      close__existing_project_modal();
    }
    open__new_project_modal();
  };

  // TODO: make this part of creating a new project, and direct to that flow via this function
  const modal_create_new_template_file = async () => {
    if (selected_folder) {
      const new_template = await create_new_template({
        directory_handle: selected_folder,
      });

      if (!new_template) {
        console.error("Error creating new template");
        alert("Error creating new template");
        return;
      }

      close__existing_project_modal();
      open__new_project_modal();
      alert("New template created successfully");

      // TODO: complete the opening of the project, after creating the new template file
    }
  };

  // TODO: Refactor/update this fn to ANALYZE and parse the template file contents, and then DISPLAY the project-overview, levels, etc.
  const handleClick_PreviewOutput = async () => {
    const directoryHandle = await window.showDirectoryPicker();
    set_selected_folder(directoryHandle);

    const folder_contents = await get_directory_contents({ directoryHandle });
    set_folder_contents(folder_contents);

    const template_file = folder_contents.find(
      (item) => item[0] === TEMPLATE_FILENAME
    );
    // TODO: USE JSON ... dynamic-import to load the template file? and then access its variables, instead of parsing it... but what about saving to it? like json, you'd have to re-write/rebuild the whole thing every time.

    // NOTE: use a "level" store-model, for MST ...
    // AND a "game" store-model, for top-level game-config state ... Also, should track "current-level" in game-config state, probably

    ///
    ///
    ///

    // const live_folder_handle = await traverse_folder_paths({
    //   folder_contents,
    //   paths: ["src", "components", "main-ui", "editor-gui-components", "live"],
    // });

    // if (live_folder_handle?.[0] !== "live") {
    //   alert(`"live" folder not found`);
    //   return;
    // }

    // const live_folder_contents = await setup_opened_directory(
    //   live_folder_handle[1] as FileSystemDirectoryHandle
    // );

    console.log("About to 'generate_files'", { main_template });

    const new_file_previews = await generate_files({
      mainTemplate: [main_template],
      // live_folder_contents,
    });
    console.log("new_file_previews", new_file_previews);
    //need to convert to file-handles

    // if (new_file_previews) {
    //   setFilePreviews(new_file_previews);
    // }
  };

  return (
    <>
      <ModalNewProjectSetup
        isOpened__new_project_modal={isOpened__new_project_modal}
        close__new_project_modal={close__new_project_modal}
      />

      <ModalNoProjectFound
        isOpened__existing_project_modal={isOpened__existing_project_modal}
        close__existing_project_modal={close__existing_project_modal}
        handleClick_create_new_project={handleClick_create_new_project}
      />
      {/*  ^ Modal, Etc v */}
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        sx={{
          backgroundColor: theme.colors.gray[0],
          width: "100%",
          height: "100vh",
        }}
      >
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Flex
            justify={"center"}
            align={"center"}
            direction={"column"}
            p={20}
            h={"400px"}
            // sx={{ border: "1px solid #494949", borderRadius: "10px" }}
          >
            <Button
              size="md"
              w={"300px"}
              color="dark"
              variant="outline"
              onClick={handleClick_create_project_folder}
            >
              New Project
            </Button>
            <Spacer height={20} />

            <Button
              onClick={handleClick_open_existing_folder}
              size="md"
              w={"300px"}
              variant="outline"
              color="dark"
            >
              Open Existing
            </Button>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};
