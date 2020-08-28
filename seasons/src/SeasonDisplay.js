import './SeasonDisplay.css';
import React from 'react';


const seasonConfig =
{
    summer: {
        text: 'Let\'s party on the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr! It\'s chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    /*before seasonConfig
    const text=season === 'summer' ? 'Its hot' : 'burr! it is chilly';
    const icon=season === 'summer' ? 'sun' : 'snowflake'; 
    */
    //console.log(season);
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-top-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-bottom-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;