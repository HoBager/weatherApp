import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography
        paragraph={true}
        textAlign="center"
        variant="h2"
        marginBottom={0}
      >
        <CircularProgress size={80} thickness={2.5} />
      </Typography>
    </Box>
  );
};

export default Loading;
