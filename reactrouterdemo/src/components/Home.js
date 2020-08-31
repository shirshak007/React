import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Sedan from './carcomponents/Sedan';
import Truck from './carcomponents/Truck';
import Suv from './carcomponents/Suv';

class Home extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div className="ui container grid">
            <div className="ui row">
              <div className="column eight wide">
                <div class="ui vertical text menu">
                  <div class="header item">Car Types</div>
                  <div className="item">
                    <Link to={'/Sedan'} className="item"> Sedan </Link>
                  </div>
                  <div className="item">
                    <Link to={'/Truck'} className="item">Truck</Link>
                  </div>
                  <div className="item">
                    <Link to={'/Suv'} className="item">Suv</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Route exact path='/Sedan' component={Sedan} />
          <Route path='/Truck' component={Truck} />
          <Route path='/Suv' component={Suv} />

        </BrowserRouter>
      </div>
    );
  }
}

export default Home;