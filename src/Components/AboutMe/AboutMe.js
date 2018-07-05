import React from 'react';
import { Likes } from '../Likes/Likes'
import { Timeline } from '../Timeline/Timeline'
import './AboutMe.css'

export const AboutMe = props => {
    return (
        <div id="About-me-div">
            <h2 className="Margin-bottom markerFont" >About Me</h2>
            <Timeline />
            <Likes />
        </div>
    );
};