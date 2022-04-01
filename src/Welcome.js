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
import { autocompleteClasses } from "@mui/material";
const useStyles = makeStyles({
  welcom: {
    paddingBottom: "149px",
  },
  "@media (max-width: 1024px)": {
    welcom: {
      paddingBottom: "80px",
    },
  },
  "@media (max-width: 768px)": {
    welcom: {
      paddingBottom: "50px",
    },
  },
});

export default function Welcome() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        style={{ color: "#ffffff" }}
        className={classes.welcom}
      >
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item md={6} sm={12}>
            <div>
              <Typography mb={4} fontSize={54} fontWeight={500}>
                Welcome to the Mischievous Land of The Meta Owls
              </Typography>
              <Typography
                fontSize={15}
                style={{ color: "#BBBBBB", lineHeight: "30px" }}
              >
                Defying the space with headhunters building a unique and
                innovative collection of NFT's. Connect your wallet and Discover
                our Brand
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  flexWrap: "wrap",
                  marginTop: "72px",
                }}
                md={{ justifyContent: "start" }}
                sm={{ justifyContent: "center" }}
              >
                <button
                  style={{
                    background: "transparent",
                    border: "2px solid #ffffff",
                    color: "#ffffff",
                    padding: "18px 35px",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Connect Wallet
                </button>
                <button
                  style={{
                    background: "transparent",
                    border: "2px solid #ffffff",
                    color: "#ffffff",
                    padding: "18px 60px",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Mint Now
                </button>
              </div>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div
              style={{
                maxWidth: "412px",
                margin: "auto",
                padding: "28px",
                border: "2px solid #ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Typography fontSize={18} style={{ fontWeight: "700" }}>
                  NFT NAME
                </Typography>
                <button
                  fontSize={18}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "0",
                    borderRadius: "20px",
                    padding: "12px 16px",
                    fontWeight: "700",
                  }}
                >
                  Place a bid
                </button>
              </div>
              <Box
                width="100%"
                component="img"
                alt="The house from the offer."
                src="/images/WhatsApp Image 2022-03-11 at 9.43 9.png"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
