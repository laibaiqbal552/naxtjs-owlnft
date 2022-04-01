import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import MetaOwls from "../src/MetaOwls";
import OurPatners from "../src/OurPatners";
import OurRarities from "../src/OurRarities";
import VisionsValues from "../src/VisionsValues";
import MeettheArtist from "../src/MeettheArtist";
import Welcome from "../src/Welcome";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#0f0f12" }}>
      <Box sx={{ my: 4 }}>
        <Welcome />
        <MetaOwls />
        <VisionsValues />
        <OurPatners />
        <OurRarities />
        <MeettheArtist />
        <Copyright />
      </Box>
    </div>
  );
}
