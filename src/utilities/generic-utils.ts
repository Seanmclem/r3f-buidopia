import { TEMPLATE_FILENAME } from "../constants/constants";
import { create_file_in_directory } from "./file-system-utils";

export const create_new_template = async ({
  directory_handle,
}: {
  directory_handle: FileSystemDirectoryHandle;
}) => {
  try {
    const new_template_file = await create_file_in_directory({
      directory_handle,
      filename: TEMPLATE_FILENAME,
    });

    return new_template_file;
  } catch (err) {
    console.log(err);
    return null;
  }

  // const new_template_handle = await directory_handle.getDirectoryHandle(
  //     "new-template",
  //     { create: true }
  // );

  // const new_template_file_handle = await new_template_handle.getFileHandle(
  //     "index.html",
  //     { create: true }
  // );

  // const new_template_file = await new_template_file_handle.createWritable();

  // await new_template_file.write(
  //     "stuff"
  // )

  // await new_template_file.close();
};
