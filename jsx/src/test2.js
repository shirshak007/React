import React from 'react';
import ReactDOM from 'react-dom';

function labelText()
{
    return 'Enter Name Here:';
}
const App =()=> {
    const buttonText='Click Me!'
    
    return (
        <div>
            <label className="label" for="name">
               {labelText()} 
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}> 
            {buttonText}
            </button>   
        </div>
        
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);