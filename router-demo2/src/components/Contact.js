import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <div className="ui list">
              <h3>Mumbai (Head Office)</h3>Mumbai 400060
              <br /> Tel.: +91 1800 591536
            </div>
            <div className="ui list">
              <h3>Chennai</h3>Chennai 600083 <br />
              Tel.: +91 1255 7100
            </div>
            <div className="ui list">
              <h3>Kolkata</h3>Kolkata 700016 <br /> Tel.: +91-33 40233800
            </div>{" "}
            <div className="ui list">
              <h3>New Delhi (Main Center)</h3>New Delhi 710020
              <br /> Tel.: (+91-11) 71726200
            </div>
          </div>
          <div className="column eight wide">
            <div className="ui list">
              <h3>Technical Support</h3> Tel.: 03174 225220/221 <br /> (toll
              free) <br /> Monday - Friday: 08:30 - 18:30
            </div>
            <div className="ui list">
              <form className="ui form">
                <h3>Write Us</h3>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <input type="text" id="message" />
                </div>
                <button className="ui button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
