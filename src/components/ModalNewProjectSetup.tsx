import {
  Modal,
  Stack,
  Flex,
  Button,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Spacer } from "./Spacer";

export const ModalNewProjectSetup = ({
  isOpened__new_project_modal,
  close__new_project_modal,
}: {
  isOpened__new_project_modal: boolean;
  close__new_project_modal: () => void;
}) => {
  const theme = useMantineTheme();
  const color = theme.colors.dark[6];

  return (
    <Modal
      opened={isOpened__new_project_modal}
      onClose={close__new_project_modal}
      title="Setup your new project"
    >
      <Stack spacing="md">
        <Stack spacing="md" py={"20px"}>
          <Text color={color}>
            some descriptionsome descriptionsome descriptionsome descriptionsome
            descriptionsome description
          </Text>
        </Stack>
        <Flex id="button-row" justify={"flex-end"}>
          <Button onClick={close__new_project_modal} variant="outline">
            Close
          </Button>
          <Spacer />
          <Button onClick={() => null}>Continue</Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
