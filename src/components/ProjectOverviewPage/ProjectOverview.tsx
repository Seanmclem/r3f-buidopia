import { SimpleGrid, Skeleton, Box, Button } from "@mantine/core";
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
    <Box sx={{ margin: "1rem", maxWidth: 1500, height: "100vh" }}>
      <SimpleGrid
        sx={{
          height: "100%",
        }}
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        <OverviewBox
          sx={{
            height: "80%",
            overflowY: "auto",
            // maxHeight: "80%",
          }}
        >
          <ReactJson src={main_template} />
        </OverviewBox>
        <Box
          sx={{
            height: "auto",
          }}
        >
          <StructureDescription />
          <Spacer />

          <OverviewBox>
            <Button onClick={handleClick_PreviewOutput}>Test Parse</Button>
          </OverviewBox>
          <Spacer />

          <Skeleton height={"100px"} radius="md" animate={false} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
