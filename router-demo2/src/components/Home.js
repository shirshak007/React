import React from "react";
import { Link } from "react-router-dom";
import Car from "../constant/CarData";

class Home extends React.Component {
  getRandomColor = () => {
    const color = ["black", "blue", "pink"];
    return color[Math.floor(Math.random() * color.length)];
  };
  render() {
    return (
      <div className="ui container segment">
        <div className="ui grid">
          {Object.keys(Car).map((key) => (
            <Link to={`/car/${key}`} key={key}>
              <div className="ui image">
                <img
                  className="ui medium rounded image"
                  src={Car[key].image}
                  style={{ height: "240px", width: "320px" }}
                  alt={Car[key].short}
                />

                <div className={`ui ribbon label ${this.getRandomColor()}`}>
                  <i className="car icon"></i> {key}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
