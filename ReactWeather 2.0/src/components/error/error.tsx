import { Box, Typography } from "@mui/material";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
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
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
