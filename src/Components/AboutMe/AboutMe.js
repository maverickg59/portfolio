import React from 'react';
import { UnorderedList } from '../../SubComponents/UnorderedList';
import { ImgCard } from '../../SubComponents/ImgCard'
import './AboutMe.css'
const contentArr = [
    {"Hometown: Denver, CO": ["Hometown", "https://images1.westword.com/imager/u/745xauto/8854397/denver_skyline_by_jeffrey_beal_instagram_2017.jpg"]}, 
    {"Current City: Phoenix, AZ": ["City", "https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_373,q_60,w_560/v1/clients/phoenix/schutz_3_cactus_and_succulent_galleries_da16b48a-3346-4996-8206-4ef0dc931f83.jpg"]},
    {"My favorite color is green.": ["Color", "http://www.factzoo.com/sites/all/img/reptiles/turtle/green-turtle-head.jpg"]},
    {"I love sea turtles!": ["Animal", "http://news.nationalgeographic.com/content/dam/news/2016/05/14/sea_turtles/01seaturtles.jpg"]}, 
    {"MotoGP makes my heart race.": ["Sport", "https://i2.wp.com/s-media-cache-ak0.pinimg.com/736x/6d/bb/fc/6dbbfc31cd76d841548bdeb9e72f4788--marc-marquez-vs.jpg?resize=720%2C427&ssl=1"]}, 
    {"Elon Musk inspires me.": ["Leader", "https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"]}, 
    {"Military discipline guides me.": ["Discipline", "https://s3-us-west-2.amazonaws.com/mgx-photos/ChrisArmy.jpg"]}, 
    {"My didgeridoo moves me.": ["Instrument", "http://www.thepoweredit.com/wp-content/uploads/2015/08/didgeridoo-player.jpg"]}]
const aboutMeCards = contentArr.map(element => {
    const li = Object.keys(element);
    const key = Object.values(element)[0][0];
    const imgUrl = Object.values(element)[0][1];
    return (
        <div key={key} className="Margin-bottom" id="Line-item-div">
            <ImgCard
            containerClassName="Card-container-shadow"
            containerId="About-me-card-container"
            imgClassName="Card-container-inset Image"
            imgId="About-me-card-img" 
            src={imgUrl}
            alt="stock photo"
            cardContent={li}
            cardContentId="About-me-card-content"
            />
        </div>
    );
});

export const AboutMe = props => {
    return (
        <div id="About-me-div">
            <h2 className="Margin-bottom" >About Me</h2>
            <UnorderedList ulId="About-me-list" content={aboutMeCards} />
        </div>
    );
};