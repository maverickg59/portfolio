import React from 'react';
import { UnorderedList } from '../../SubComponents/UnorderedList';
import { ImgCard } from '../../SubComponents/ImgCard'
import './Projects.css'
const projectsPp = "Provider Prescriber";
const projectsMgx = "MotoGX";
const projectsWm = "Write Me";
const projectsInt = "Intact";
const projectsAws = 'AWS S3 PhotoBucket';
const projectsApi = 'Go REST API';
const projectsArray = [
    {"Provider Prescriber": ["https://s3-us-west-2.amazonaws.com/mgx-photos/provider-prescriber.png", projectsPp]},
    {"Moto GX": ["https://s3-us-west-2.amazonaws.com/mgx-photos/moto-gx.png", projectsMgx]},
    {"Write Me": ["https://s3-us-west-2.amazonaws.com/mgx-photos/write-me.png", projectsWm]},
    {"Intact": ["https://s3-us-west-2.amazonaws.com/mgx-photos/intact.gif", projectsInt]},
    {"S3 Photobucket": ["https://s3-us-west-2.amazonaws.com/mgx-photos/PhotoBucket.png", projectsAws]}, 
    {"Go REST API": ["https://s3-us-west-2.amazonaws.com/mgx-photos/go-rest-api.png", projectsApi]}]
const projectCards = projectsArray.map(element => {
    const name = Object.keys(element);
    const imgUrl = Object.values(element)[0][0];
    const content = Object.values(element)[0][1];
    return (
        <div key={name} className="Margin-bottom" id="My-projects-div">
            <ImgCard 
            containerClassName="Card-container-shadow"
            containerId="Projects-card-container"
            imgClassName="Card-container-inset Image"
            imgId="Projects-card-img"
            src={imgUrl}
            cardContent={content}
            cardContentId="Projects-card-content" 
            />
        </div>
    );
});

export const Projects = props => {
    return (
        <div id="My-projects-div">
            <h2>My Projects</h2>
            <UnorderedList ulId="My-projects-list" content={projectCards} />
        </div>
    );
}