import { Box } from "@mantine/core";

export const OverviewBox = ({ children, sx }: { children: any; sx?: any }) => (
  <Box
    sx={{
      padding: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: "#fff",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
      border: "1px solid #eaeaead4",
      ...(sx || {}),
      // height: "100%",
    }}
  >
    {children}
  </Box>
);
