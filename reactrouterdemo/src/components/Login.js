import React from 'react';

class Login extends React.Component {
   render() {
      return (
         <div class="ui placeholder segment">
            <div class="ui two column very relaxed stackable grid">
               <div class="column">
                  <form className="ui form">
                     <div class="field">
                        <label htmlFor="email">Email/Phone</label>
                        <input type="text" id="email" />
                     </div>
                     <div class="field">
                        <label htmlFor="password">Email</label>
                        <input type="password" id="password" />
                     </div>
                     <button className="ui blue submit button" type="submit">Login</button>
                  </form>
               </div>
                  <div class="middle align column">
                  <div class="ui red button">
                        <i className="google icon" />
                        Sign Up with Google
                     </div>
                  </div>
               </div>
           
            <div class="ui vertical divider">
               Or
            </div>
         </div>
      );
   }
}

export default Login;