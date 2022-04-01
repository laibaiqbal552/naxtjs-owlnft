import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#ffffff",
    },
    yellow: {
      main: "#D6CF12",
    },
    purple: {
      main: "#D550EA",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Helvetica", "serif"].join(","),
    fontSize: 18,
  },
});

export default theme;
