import { MantineProvider } from "@mantine/core";
import { ProjectOverview } from "./components/pages/ProjectOverview";
import { useAppStore } from "./stores/zustand_app_store";
import { ProjectSelectOrCreate } from "./components/pages/ProjectSelectOrCreate";

export default function App() {
  const page = useAppStore((state) => state.page);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {
        page === "landing" ? (
          <ProjectSelectOrCreate />
        ) : page === "new-project" ? (
          <div>new-project</div>
        ) : page === "project-overview" ? (
          <ProjectOverview />
        ) : null // TODO: 404 page
      }
    </MantineProvider>
  );
}
