import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Clock from "./Clock";

class App extends React.Component {
  /*
    //Either this...
    constructor(props)
    {
        super(props);

        this.state={lat:null,long:null,errorMessage:''};

        
    }
   // or, this...
    */
  state = { lat: null, long: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <SeasonDisplay lat={this.state.lat} long={this.state.long} />
        /*
            <div>
                Latitude: {this.state.lat}
                <br />
                longitude: {this.state.long}
            </div>
            */
      );
    }
    return <Spinner message="Please allow Location..." />;
  }

  render() {
    return (
      <div>
        <Clock />
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
