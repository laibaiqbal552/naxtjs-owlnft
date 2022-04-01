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
import { spacing } from "@mui/system";
const useStyles = makeStyles({
  meet: {
    paddingBottom: "149px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    maxWidth: "853px",
    margin: "auto",
    p: 1,
  },
  "@media (max-width: 1024px)": {
    meet: {
      paddingBottom: "80px",
    },
  },
  "@media (max-width: 768px)": {
    meet: {
      justifyContent: "center",
      paddingBottom: "0",
    },
  },
});

export default function MeettheArtist() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ color: "#ffffff" }}>
        <Typography my={5} style={{ fontSize: "35px", fontWeight: "800" }}>
          Meet The Artist
        </Typography>

        <div style={{ width: "100%" }}>
          <div className={classes.meet}>
            <div
              style={{
                width: "303px",
                border: "2px solid #ffffff",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} display="flex" pb={2} justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/WhatsApp Image 2022-03-11 at 9.43 6.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                StratticeTM
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                }}
                align="center"
              >
                Director of Operations
              </Typography>
            </div>
            <div
              style={{
                width: "303px",
                border: "2px solid #ffffff",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} display="flex" pb={2} justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/WhatsApp Image 2022-03-11 at 9.43 5.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Jeet
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                }}
                align="center"
              >
                3D Artist
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className={classes.meet}>
            <div
              style={{
                width: "303px",
                border: "2px solid #ffffff",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} display="flex" pb={2} justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/WhatsApp Image 2022-03-11 at 9.43 6.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                StratticeTM
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                }}
                align="center"
              >
                Director of Operations
              </Typography>
            </div>
            <div
              style={{
                width: "303px",
                border: "2px solid #ffffff",
                padding: "20px",
                marginTop: "20px",
              }}
              sm={{ mt: "20px" }}
            >
              <Grid item xs={12} display="flex" pb={2} justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/WhatsApp Image 2022-03-11 at 9.43 5.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Jeet
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                }}
                align="center"
              >
                3D Artist
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: "row",
              maxWidth: "853px",
              margin: "auto",
              p: 1,
            }}
          >
            <div
              style={{
                width: "303px",
                border: "2px solid #ffffff",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} display="flex" pb={2} justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/WhatsApp Image 2022-03-11 at 9.43 12.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Afzal
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                }}
                align="center"
              >
                Website Developer
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
