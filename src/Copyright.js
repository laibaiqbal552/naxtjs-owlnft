import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import {
  createTheme,
  theme,
  ThemeProvider,
  styled,
} from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  copy: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "38px",
  },
});

export default function Copyright() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div style={{ borderTop: "1px solid #ffffff" }}>
        <Typography
          variant="body2"
          style={{ color: "#ffffff", marginTop: "38px" }}
          align="center"
        >
          {" © "}
          <MuiLink color="inherit" href="https://mui.com/">
            “2022 Meta Owls NFT. All rights reserved.”
          </MuiLink>{" "}
          {/* {new Date().getFullYear()}. */}
        </Typography>
        <Container maxWidth="lg" className={classes.copy}>
          <Link href="/">
            <Typography
              style={{
                color: "#FBFAF5",
                textDecoration: "underline",
                fontSize: "16px",
              }}
            >
              Terms & Conditions
            </Typography>
          </Link>

          <Link href="/">
            <Typography
              style={{
                color: "#FBFAF5",
                textDecoration: "underline",
                fontSize: "16px",
              }}
            >
              WhitePaper{" "}
            </Typography>
          </Link>
        </Container>
      </div>
    </ThemeProvider>
  );
}
