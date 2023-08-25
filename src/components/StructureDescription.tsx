import { Group, RingProgress, Text, createStyles, rem } from "@mantine/core";
import { OverviewBox } from "./OverviewBox";

export const StructureDescription = () => {
  const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    footer: {
      display: "flex",
      justifyContent: "space-between",
      padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2]
      }`,
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
    },
  }));

  const { classes } = useStyles();

  const title = "Project title";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna eget massa aliquet mattis.";

  return (
    <OverviewBox>
      <Group position="apart" mt="xl">
        <Text fz="sm" fw={700} className={classes.title}>
          {title}
        </Text>
        <Group spacing={5}>
          <Text fz="xs" c="dimmed">
            80% completed
          </Text>
          <RingProgress size={18} sections={[{ value: 80, color: "blue" }]} />
        </Group>
      </Group>
      <Text mt="sm" mb="md" c="#3d3d3d" fz="xs">
        {description}
      </Text>
    </OverviewBox>
  );
};
