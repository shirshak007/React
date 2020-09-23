import React from "react";
import carData from "../constant/CarData";

class Car extends React.Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { cars } = carData[id];

    return (
      <div className="ui items segment">
        {cars.map((car, index) => (
          <div className="ui large container segment black" key={index}>
            <div className="ui large image">
              <img
                src={car.image}
                alt={car.name}
                style={{ width: "320px", height: "240px" }}
              />
            </div>
            <div className="ui container segment">
              <div className="ui header">{car.name}</div>
              <div className="ui description">
                <div>{car.description}</div>
                <div>{car.short}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Car;
