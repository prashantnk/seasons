import './SeasonDisplay.css' // importing css file , webpack see the content and stick to the index.html
import React from 'react';
import PresentTime from './PresentTime';
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return (lat > 0 ? 'summer' : 'winter');
    }
    else {
        return (lat > 0 ? 'winter' : 'summer');
    }
}
const seasonConfig = {
    summer: {
        text: "Let's hit the beach ! ",
        iconName: "sun"
    },
    winter: {
        text: "Burr , it's chilly ! ",
        iconName: "snowflake"
    }
};
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // console.log(season);
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <PresentTime />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;