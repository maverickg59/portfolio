import React from 'react';
import { ImgCard } from '../../SubComponents/ImgCard'
const projectsArray = [
    {"": ["", ""]},
    {"": ["", ""]},
    {"": ["", ""]},
    {"": ["", ""]}, 
    
]

export const Projects = props => {
    return (
        <div id="My-projects-div">
            <h2>My Projects</h2>
            <ImgCard 
               containerClassName="Card-container-shadow"
               containerId="Projects-card-container"
               imgClassName="Card-container-inset"
               imgId="Projects-card-img"
               src="https://s3-us-west-2.amazonaws.com/mgx-photos/provider-prescriber.png"
               cardContent={`Provider Prescriber blah blah.`}
               cardContentId="Projects-card-content" 
            />
        </div>
    );
}