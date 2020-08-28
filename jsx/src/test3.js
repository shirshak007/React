import React from 'react';
import ReactDOM from 'react-dom';

function labelText()
{
    return 'Enter Name Here:';
}
function getTime(){
    return (new Date()).toLocaleTimeString();
}
const App =()=> {
    const buttonText={text:'Click Me'}
    
    return (
        <div>
            <label className="label" htmlFor="name">
               {labelText()} 
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}> 
            {buttonText.text}
            </button>   
            <br/>
            Current Time: {getTime()}
        </div>
        
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);