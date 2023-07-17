import { MantineProvider, Text } from "@mantine/core";
import { ProjectOverview } from "./components/ProjectOverviewPage/ProjectOverview";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ProjectOverview />
    </MantineProvider>
  );
}
