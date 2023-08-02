import { SimpleGrid, Skeleton, Box, Button, Flex } from "@mantine/core";
import { StructureDescription } from "./components/StructureDescription";
import { OverviewBox } from "../OverviewBox";
import { Spacer } from "../Spacer";

import { main_template } from "../templates/template1";
import ReactJson from "react-json-view";
import { FilePreview, generate_files } from "../../utilities/export-utils";
import { useState } from "react";

/** The PROJECT STRUCTURE and OVERVIEW */
export const ProjectOverview = () => {
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);

  const handleClick_PreviewOutput = async () => {
    // const directoryHandle = await window.showDirectoryPicker();
    // set_selected_folder(directoryHandle);

    // const folder_contents = await getDirectoryContents({ directoryHandle });
    // set_folder_contents(folder_contents);

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
    <Flex
      justify={"center"}
      align={"center"}
      direction={"column"}
      sx={{ backgroundColor: "#ffffff", width: "100%", height: "100vh" }}
    >
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        p={20}
        h={"400px"}
        sx={{ border: "1px solid #494949", borderRadius: "10px" }}
      >
        <Button size="md" w={"300px"} color="dark" variant="outline">
          New Project
        </Button>
        <Spacer height={20} />
        <Button size="md" w={"300px"} variant="outline" color="dark">
          Open Existing
        </Button>
      </Flex>
    </Flex>
  );
};
