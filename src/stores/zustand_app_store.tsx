import { create } from "zustand";
import { EntryType } from "../utilities/file-system-utils";
// import { devtools, persist } from "zustand/middleware";

type Page = "landing" | "new-project" | "project-overview";

interface AppState {
  page: Page;
  set_page: (page: Page) => void;
  // ---
  selected_folder: FileSystemDirectoryHandle | undefined;
  // different because someone might select a folder, then crearte project folder witin it
  set_selected_folder: (selected_folder: FileSystemDirectoryHandle) => void;
  // ---
  selected_folder_contents: EntryType[];
  set_selected_folder_contents: (folder_contents: EntryType[]) => void;
  project_folder: FileSystemDirectoryHandle | undefined;
  set_project_folder: (project_folder: FileSystemDirectoryHandle) => void;
  // ---
  project_folder_contents: EntryType[];
  set_project_folder_contents: (folder_contents: EntryType[]) => void;
  // ---
  template_file: EntryType | undefined;
  set_template_file: (template_file: EntryType) => void;
  // ---
}

export const useAppStore = create<AppState>()(
  //   devtools(
  // persist(
  (set) => ({
    page: "landing",
    set_page: (page) => set((_state) => ({ page })),
    // ---
    selected_folder: undefined,
    set_selected_folder: (selected_folder) =>
      set((_state) => ({ selected_folder })),
    // ---
    selected_folder_contents: [],
    set_selected_folder_contents: (selected_folder_contents) =>
      set((_state) => ({ selected_folder_contents })),
    // ---
    project_folder: undefined,
    set_project_folder: (project_folder) =>
      set((_state) => ({ project_folder })),
    // ---
    project_folder_contents: [],
    set_project_folder_contents: (project_folder_contents) =>
      set((_state) => ({ project_folder_contents })),
    // ---
    template_file: undefined,
    set_template_file: (template_file) => set((_state) => ({ template_file })),
    // ---
  })
  //   ,
  //   {
  //     name: "bear-storage",
  //   }
  // )
  //   )
);
