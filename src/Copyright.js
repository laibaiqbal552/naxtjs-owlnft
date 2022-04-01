import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import {
  createTheme,
  theme,
  ThemeProvider,
  styled,
} from "@mui/material/styles";

export default function Copyright() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" style={{ color: "#ffffff" }} align="center">
        {" © "}
        <MuiLink color="inherit" href="https://mui.com/">
          “2022 Meta Owls NFT. All rights reserved.”
        </MuiLink>{" "}
        {/* {new Date().getFullYear()}. */}
      </Typography>
    </ThemeProvider>
  );
}
