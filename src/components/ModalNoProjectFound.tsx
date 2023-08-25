import {
  Modal,
  Stack,
  Flex,
  Button,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { TEMPLATE_FILENAME } from "../constants/constants";
import { Spacer } from "./Spacer";

export const ModalNoProjectFound = ({
  isOpened__existing_project_modal,
  close__existing_project_modal,
  handleClick_create_new_project,
}: {
  isOpened__existing_project_modal: boolean;
  close__existing_project_modal: () => void;
  handleClick_create_new_project: () => Promise<void>;
}) => {
  const theme = useMantineTheme();
  const color = theme.colors.dark[6];

  return (
    <Modal
      opened={isOpened__existing_project_modal}
      onClose={close__existing_project_modal}
      title="Template file not found"
    >
      <Stack spacing="md">
        <Stack spacing="md" py={"20px"}>
          <Text color={color}>
            A project or template file "{TEMPLATE_FILENAME}" was not found in
            the selected folder.
          </Text>
          <Text color={color}>
            Would you like to create a new project in this folder?
          </Text>
        </Stack>
        <Flex justify={"flex-end"}>
          <Button onClick={close__existing_project_modal} variant="outline">
            Cancel
          </Button>
          <Spacer />
          <Button onClick={handleClick_create_new_project}>Create New</Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
