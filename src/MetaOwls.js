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

export default function MetaOwls() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ color: "#ffffff" }}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item md={6} sm={12}>
            <div>
              <Typography mb={5} fontWeight={800}>
                What are The Meta Owls ?
              </Typography>
              <Typography mb={4} fontSize={18}>
                Meta Owls are your entry into the largest and fastest growing
                online Ethereum Network on the blockchain. Exclusive to 7,777
                Generation One NFT’s to ever be minted, Meta Owls grant holders
                access to the new world of Decentralized Finance with an endless
                limit to their Benefits & Utility. With Meta Owls being based on
                the ERC-721 standard, each NFT grants Guaranteed proof of
                ownership on the Ethereum blockchain. Meta Owls will be an
                intersection of Community, Art, Talents/Skills, Gaming, and
                Influencers
              </Typography>
              <Typography fontSize={18}>
                The Meta Owls is a brand that is launching a Generation One
                Collection of 7,777 randomly generated NFT’s with uniquely
                original art modeled into 3D by our Professional Team. Each
                piece of art is "Non-Fungible" meaning these tokens are not
                interchangeable with one another. They are artistically unique
                creating value as a one of a kind digital collectible in the
                upcoming NFT Space. This is not your average Art Piece: Meta
                Owls are your passion, your bragging rights
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box
              width="100%"
              component="img"
              alt="The house from the offer."
              src="/images/157122 1.png"
            />
          </Grid>
        </Grid>
        <Typography my={5} fontSize={18} align="center">
          Each Meta Owl is ENTIRELY one of a kind.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
