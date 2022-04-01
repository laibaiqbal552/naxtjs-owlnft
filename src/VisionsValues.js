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

export default function VisionsValues() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ color: "#ffffff" }}>
        <Typography my={5} style={{ fontSize: "35px", fontWeight: "800" }}>
          Visions and Values
        </Typography>
        <Typography
          my={5}
          style={{ fontSize: "18px", fontWeight: "700", lineHeight: "38px" }}
        >
          Purchasing a Meta Owl is only the start to your NFT Experience, as
          you’re not only owning a rankable item or a certified piece of art.
          You’re gaining membership access to the Meta Owl club whose visions
          and values are as follows
        </Typography>
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "50px",
              justifyContent: "center",
              p: 1,
              m: 1,
            }}
          >
            <div style={{ width: "300px" }}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/Pub Quiz 5.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Into the Metaverse
              </Typography>
              <Typography
                style={{
                  color: "#D550EA",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                align="center"
              >
                (Moving Land Gif)
              </Typography>
              <Typography mb={4} mt={2} fontSize={18} align="center">
                Building and creating an enjoyable experience in the Metaverse
                requires a set number of factors and challenges the community
                and team will be ready for. Building an Exclusive economy and
                Playable Experience is yet only some of the few Milestones set
                along our Metaverse Journey. Becoming one of our Generation One
                Meta Owl Holders also means earning extra perks and rewards in
                the upcoming future
              </Typography>
            </div>
            <div style={{ width: "300px" }}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/Ethereum 1.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Future Mints & Airdrops
              </Typography>
              <Typography
                style={{
                  color: "#D550EA",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                align="center"
              >
                (Jet Dropping an NFT Gif)
              </Typography>
              <Typography mb={4} mt={2} fontSize={18} align="center">
                Building and creating an enjoyable experience in the Metaverse
                requires a set number of factors and challenges the community
                and team will be ready for. Building an Exclusive economy and
                Playable Experience is yet only some of the few Milestones set
                along our Metaverse Journey. Becoming one of our Generation One
                Meta Owl Holders also means earning extra perks and rewards in
                the upcoming future
              </Typography>
            </div>
            <div style={{ width: "300px" }}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/T-shirt 1.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Coummunity Wallet
              </Typography>
              <Typography
                style={{
                  color: "#D550EA",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                align="center"
              >
                (wallet opening gif)
              </Typography>
              <Typography mb={4} mt={2} fontSize={18} align="center">
                Building and creating an enjoyable experience in the Metaverse
                requires a set number of factors and challenges the community
                and team will be ready for. Building an Exclusive economy and
                Playable Experience is yet only some of the few Milestones set
                along our Metaverse Journey. Becoming one of our Generation One
                Meta Owl Holders also means earning extra perks and rewards in
                the upcoming future
              </Typography>
            </div>
            <div style={{ width: "300px" }}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/T-shirt 1.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Safety and education
              </Typography>
              <Typography
                style={{
                  color: "#D550EA",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                align="center"
              >
                (shield with circle ring spinning around gif)
              </Typography>
              <Typography mb={4} mt={2} fontSize={18} align="center">
                Building and creating an enjoyable experience in the Metaverse
                requires a set number of factors and challenges the community
                and team will be ready for. Building an Exclusive economy and
                Playable Experience is yet only some of the few Milestones set
                along our Metaverse Journey. Becoming one of our Generation One
                Meta Owl Holders also means earning extra perks and rewards in
                the upcoming future
              </Typography>
            </div>
            <div style={{ width: "300px" }}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box
                  width="100%"
                  component="img"
                  alt="The house from the offer."
                  src="/images/Pub Quiz 5.png"
                />
              </Grid>
              <Typography fontWeight={700} align="center">
                Premium Access
              </Typography>
              <Typography
                style={{
                  color: "#D550EA",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
                align="center"
              >
                (shield with circle ring spinning around gif)
              </Typography>
              <Typography mb={4} mt={2} fontSize={18} align="center">
                Building and creating an enjoyable experience in the Metaverse
                requires a set number of factors and challenges the community
                and team will be ready for. Building an Exclusive economy and
                Playable Experience is yet only some of the few Milestones set
                along our Metaverse Journey. Becoming one of our Generation One
                Meta Owl Holders also means earning extra perks and rewards in
                the upcoming future
              </Typography>
            </div>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
}
