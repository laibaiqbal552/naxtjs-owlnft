import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  theme,
  ThemeProvider,
  styled,
} from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  rities: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "85px",
    marginTop: "133px",
  },
  "@media (max-width: 1024px)": {
    rities: {
      marginBottom: "35px",
      marginTop: "50px",
    },
  },
});

export default function OurRarities() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ color: "#ffffff" }}>
        <Typography my={5} style={{ fontSize: "35px", fontWeight: "800" }}>
          Our Patners
        </Typography>
        <div className={classes.rities}>
          <Typography style={{ color: "#D6CF12" }}>Eye Color</Typography>
          <div
            style={{
              height: "2px",
              backgroundColor: "#ffffff",
              maxWidth: "632px",
              margin: "auto",
              width: "100%",
            }}
          ></div>
          <Typography>10</Typography>
        </div>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box
            component="img"
            alt="The house from the offer."
            src="/images/Group 249.png"
          />
        </Grid>
        <div className={classes.rities}>
          <Typography style={{ color: "#D6CF12" }}>Eye Color</Typography>
          <div
            style={{
              height: "2px",
              backgroundColor: "#ffffff",
              maxWidth: "632px",
              margin: "auto",
              width: "100%",
            }}
          ></div>
          <Typography>10</Typography>
        </div>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box
            component="img"
            alt="The house from the offer."
            src="/images/Group 249.png"
          />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
