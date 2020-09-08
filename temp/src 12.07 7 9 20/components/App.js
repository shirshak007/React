import React from "react";
import HeaderTab from "./HeaderTab";
import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <HeaderTab />

        <Footer />
      </div>
    );
  }
}

export default App;
