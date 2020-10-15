//this component is rendered in the app and always shown at the right bottom of window
//this handle the scrolling if the page height is too long
import React from "react";
import { Fab } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

/*This component is used to show the button in the right bottom of the page which is used to navigate top to  bottom and bottom to top*/
class GotoTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHide: false };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    let { isHide } = this.state;
    window.scrollY > 1000
      ? !isHide && this.setState({ isHide: true })
      : isHide && this.setState({ isHide: false });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleClickGotoTop() {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  }
  handleClickGotoBottom() {
    window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` });
  }

  render() {
    return (
      <div>
        {this.state.isHide ? (
          <Fab
            size="small"
            style={{
              margin: "0px",
              top: "auto",
              right: "20px",
              bottom: "20px",
              left: "auto",
              position: "fixed",
            }}
            onClick={this.handleClickGotoTop}
            aria-label="gototop"
          >
            <ArrowUpwardIcon />
          </Fab>
        ) : (
          <Fab
            size="small"
            style={{
              margin: "0px",
              top: "auto",
              right: "20px",
              bottom: "20px",
              left: "auto",
              position: "fixed",
            }}
            onClick={this.handleClickGotoBottom}
            aria-label="gototop"
          >
            <ArrowDownwardIcon />
          </Fab>
        )}
      </div>
    );
  }
}

export default GotoTop;
