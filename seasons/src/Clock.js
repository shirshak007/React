import React from "react";

class Clock extends React.Component {
  state = { time: "" };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toGMTString() });
    }, 1000);
  }

  render() {
    return <div className="time">TIME: {this.state.time}</div>;
  }
}

export default Clock;
