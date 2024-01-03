import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "36ch" },
      }}
      // Validate
      autoComplete="on"
    >
      <TextField
        label="Continue with Mobile number"
        variant="standard"
        size="small"
        color="warning"
      />
    </Box>
  );
}
