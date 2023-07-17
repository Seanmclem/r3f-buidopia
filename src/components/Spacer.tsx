import { Box } from "@mantine/core";

/** Defaults to 20px height*/
export const Spacer = ({
  /** Defaults to 20px */
  height,
  width,
}: {
  height?: number;
  width?: number;
}) => (
  <Box
    sx={
      !width && height
        ? { height, width: "100%" }
        : !height && width
        ? { width, height: "auto" }
        : { height: 20 }
    }
  />
);
