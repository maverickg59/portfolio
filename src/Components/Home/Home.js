import React from 'react';
import { ImgCard } from '../../SubComponents/ImgCard'
import './Home.css'

export const Home = props => {
    return (
        <div id="Home-div">
            <ImgCard
                containerClassName="Card-container-shadow"
                containerId="Home-card-container"
                imgClassName="Card-container-inset"
                imgId="Home-card-img" src="https://s3-us-west-2.amazonaws.com/mgx-photos/IMG_1910.jpg" alt="Photo of Christopher White"
                cardContent={`I'm Chris, a MERN stack developer with big dreams. I believe programming mimics the human condition and the user experience should too.`}
                cardContentId="Home-card-content"
                cardContentClass="markerFont"
            />
        </div>
    );
}