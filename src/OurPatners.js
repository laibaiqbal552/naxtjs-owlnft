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
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { autocompleteClasses } from "@mui/material";
const useStyles = makeStyles({
  root: {
    maxWidth: "367px",
    margin: "auto",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "100px",
  },
  "@media (max-width: 1024px)": {
    root: {
      paddingTop: "50px",
    },
  },
  "@media (max-width: 768px)": {
    root: {
      maxWidth: "527px",
      paddingTop: "40px",
    },
  },
});

export default function OurPatners() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ color: "#ffffff" }}>
        <Typography my={5} style={{ fontSize: "35px", fontWeight: "800" }}>
          Our Patners
        </Typography>
        <Grid
          container
          spacing={5}
          style={{ justifyContent: "space-between" }}
          alignItems="center"
        >
          <Grid item md={6} sm={12} className={classes.root}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Box
                width="100%"
                component="img"
                alt="The house from the offer."
                src="/images/coursera-vector-logo 1.png"
              />
            </Grid>
            <Typography mb={4} mt={2} fontSize={18} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas mauris in augue ultricies pellentesque. Ut sit amet
              ullamcorper lectus. Nam quis lacinia lacus, porttitor pellentesque
              dolor.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className={classes.root}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Box
                width="100%"
                component="img"
                alt="The house from the offer."
                src="/images/udemy-2-logo-svg-vector 1.png"
              />
            </Grid>
            <Typography mb={4} fontSize={18} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas mauris in augue ultricies pellentesque. Ut sit amet
              ullamcorper lectus. Nam quis lacinia lacus, porttitor pellentesque
              dolor.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ justifyContent: "space-between" }}
          alignItems="center"
        >
          <Grid item md={6} sm={12} className={classes.root}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Box
                width="100%"
                component="img"
                alt="The house from the offer."
                src="/images/Khan_Academy-Logo.wine 1.png"
              />
            </Grid>
            <Typography mb={4} fontSize={18} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas mauris in augue ultricies pellentesque. Ut sit amet
              ullamcorper lectus. Nam quis lacinia lacus, porttitor pellentesque
              dolor.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className={classes.root}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Box
                width="100%"
                component="img"
                alt="The house from the offer."
                src="/images/microsoft-logo-png-2396 1.png"
              />
            </Grid>
            <Typography mb={4} fontSize={18} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas mauris in augue ultricies pellentesque. Ut sit amet
              ullamcorper lectus. Nam quis lacinia lacus, porttitor pellentesque
              dolor.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
