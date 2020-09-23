import React from "react";
import GoogleAuth from "./GoogleAuth";

class Login extends React.Component {
  render() {
    return (
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <form className="ui form">
              <div className="field">
                <label htmlFor="email">Email/Phone</label>
                <input type="text" id="email" />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button className="ui blue submit button" type="submit">
                Login
              </button>
            </form>
          </div>
          <div className="middle align column">
            <GoogleAuth />
          </div>
        </div>

        <div className="ui vertical divider">Or</div>
      </div>
    );
  }
}

export default Login;
