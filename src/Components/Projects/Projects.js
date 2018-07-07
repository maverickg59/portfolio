import React from 'react';
import { UnorderedList } from '../../SubComponents/UnorderedList';
import { ImgCard } from '../../SubComponents/ImgCard'
import ProjectModal from '../../ReactStrap/ProjectModal';
import './Projects.css'
const projectsPp = "Provider Prescriber is a single page web application that allows users to search for local medical providers similarly credentialed to their current by comparing attributes using data science algorithms. This project was a joint effort where my partner developed the data science algorithms and I developed client and server side applications";
const projectsMgx = "MotoGX is a peer to peer marketplace developed to centralize the motorcycle used gear and parts marketplace. Future implementations of this application include fully functional web and mobile app deployments with integrated payment gateway and shipping services. This is an individual project with a production ready version scheduled for December 2018.";
const projectsWm = "Write Me is a single page web application developed to assist secondary and post-secondary students in writing and citing their research papers. This application uses a proprietary layout framework and EasyBib's external Citation Formatting API.";
const projectsInt = "Intact is a React Native iOS application that was spawned during a 56 hour hackathon in Denver. Our initial implementation earned us a nine day period to refactor the web app into an iOS application for Barrick Gold. I played the role of lead developer and coded for 18 to 20 hours a day; developing more than 90% of this application. This app was especially challenging because I was new to Node JS and started learning React Native on day one of the nine day sprint.";
const projectsAws = "I developed this photo bucket with the intent to store images on Amazon S3 to reduce internal server workload and deliver images in the style of CDN. Implementation requires that your internal API POST to S3 first (I've used SkipperS3) and later upload the image URL retrieved in the S3 response as part of the data object.";
const projectsApi = "I developed this API to persist data and CRUD against MongoDB utilizing modern REST API principles. Future implementations can be modified to suit the needs of it's specific use case and application.";
const projectsArray = [
    {"Provider Prescriber": ["https://s3-us-west-2.amazonaws.com/mgx-photos/provider-prescriber.png", projectsPp, ["HTML5", "CSS3", "jQuery", "Node JS", "Express", "Knex", "PostgreSQL", "Firebase", "Heoku", "Internal REST API"]]},
    
    {"MotoGX": ["https://s3-us-west-2.amazonaws.com/mgx-photos/moto-gx.png", projectsMgx, ["React JS", "Reactstrap", "Node JS", "Express", "MongoDB", "Firebase", "Heroku", "Internal REST API"]]},

    {"Write Me": ["https://s3-us-west-2.amazonaws.com/mgx-photos/write-me.png", projectsWm, ["HTML5", "CSS3", "jQuery", "Bootstrap", "External REST API"]]},

    {"Intact": ["https://s3-us-west-2.amazonaws.com/mgx-photos/intact.gif", projectsInt, ["React Native", "Router Flux", "Node JS", "Express", "Knex", "PostgreSQL", "Expo", "Heroku", "Internal REST API"]]},

    {"AWS S3 Photobucket": ["https://s3-us-west-2.amazonaws.com/mgx-photos/PhotoBucket.png", projectsAws, ["AWS S3", "AWS S3 REST API", "Internal REST API"]]}, 
    
    {"Go REST API": ["https://s3-us-west-2.amazonaws.com/mgx-photos/go-rest-api.png", projectsApi, ["Golang", "Gorilla Mux", "MGO", "MongoDB"]]}
]
const projectCards = projectsArray.map(element => {
    const name = Object.keys(element);
    const imgUrl = Object.values(element)[0][0];
    const description = Object.values(element)[0][1];
    const techLinks = Object.values(element)[0][2];
    const techLinksMap = techLinks.map(element => {
        return <li key={name.concat(' tech')} className="Projects-modal-tech-link">{element}</li>
    });
    const techList = <div><p>{description}</p><UnorderedList ulId="Projects-modal-tech-links" content={techLinksMap} /></div>;
    const innerModal = <ImgCard 
    containerClassName="Projects-modal-contents" 
    imgClassName="Projects-modal-image"
    src={imgUrl} 
    cardContent={techList}
    cardContentClass="Zero-margin-bottom" />
    const buttonContents = <ImgCard 
    containerClassName="Card-container-shadow"
    containerId="Projects-card-container"
    imgClassName="Card-container-inset Image"
    imgId="Projects-card-img"
    src={imgUrl}
    cardContent={name}
    cardContentId="Projects-card-content"
    cardContentClass="nanumFont"
    />;
    return (
        <div key={name} className="Margin-bottom" id="My-projects-line-item-div">
            <ProjectModal
            modalTitle={name}
            modalBody={innerModal}
            modalButtonClassName="Projects-cards-modal-button"
            modalButtonId="Projects-cards-modal-button"
            buttonLabel={buttonContents} 
            modalDivClassName="Project-cards-modal-div"
            modalClassName="Project-cards-modal"
            modalId="Projects-modal"
            autoFocus={false}
            />
        </div>
    );
});

export const Projects = props => {
    return (
        <div id="My-projects-div">
            <h2 className="Margin-bottom markerFont">My Projects</h2>
            <UnorderedList ulId="My-projects-list" content={projectCards} />
        </div>
    );
}