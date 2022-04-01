import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import MetaOwls from "../src/MetaOwls";
import OurPatners from "../src/OurPatners";
import OurRarities from "../src/OurRarities";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#0f0f12" }}>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <MetaOwls />
          <OurPatners />
          <OurRarities />
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
