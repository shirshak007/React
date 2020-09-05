import React from "react";
import { Button } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <div className="container segment">
        <Button fullWidth>Full Width</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
        <Button color="default">Default</Button>
        <Button color="inherit">Inherit</Button>
        <Button color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
      </div>
    );
  }
}

export default App;
