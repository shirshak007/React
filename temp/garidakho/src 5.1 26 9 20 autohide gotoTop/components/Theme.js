import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

import { red, blue, green } from "@material-ui/core/colors";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      test: red[500],
    },
    secondary: {
      main: blue[500],
      test: red[500],
    },
    text: {
      green: green[100],
      darkGreen: green[500],
      blue: blue[100],
      darkBlue: blue[500],
    },
    background: {
      green: green[50],
      darkGreen: green[900],
      blue: blue[50],
      darkBlue: blue[900],
    },
  },
});

export default Theme;
