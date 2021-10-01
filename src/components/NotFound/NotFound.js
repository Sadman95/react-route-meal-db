import { Alert, AlertTitle, Stack } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <h1>
          404 <strong>Page Not Found</strong>
        </h1>
      </Alert>
    </Stack>
  );
};

export default NotFound;
