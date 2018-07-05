import React from 'react';
import { LinksList } from '../../SubComponents/LinksList'
import { FaGithub, FaLinkedinSquare, FaHome, FaArchive, FaTerminal, FaBriefcase, FaGamepad } from 'react-icons/lib/fa'
const navBarArray = [
    {'Home': ['#Home-div', <FaHome />]}, 
    {'About': ['#About-me-div', <FaArchive />]}, 
    {'Projects': ['#My-projects-div', <FaTerminal />]},  
    {'Games': ['#games', <FaGamepad />]},
    {'Resume': ['https://drive.google.com/open?id=1gtAjRko0TLO5CoZJkBvS2Xs1oa_FOl3B', <FaBriefcase />]},
    {"GitHub": ["https://github.com/maverickg59", <FaGithub />]},
    {"LinkedIn": ["https://www.linkedin.com/in/chrisewhite/", <FaLinkedinSquare />]}]
const links = navBarArray.map((element) => {
    const key = Object.keys(element);
    const link = Object.values(element)[0][0];
    const icon = Object.values(element)[0][1];
    const navLink = <a className="List-item" id="Nav-list-item" key={key} href={link}><div className="NavBar-icon">{icon}</div><li>{key}</li></a>;
    const extLink = <a className="List-item" id="Nav-list-item" key={key} href={link} target="_blank" ><div className="NavBar-icon">{icon}</div><li>{key}</li></a>;
    return navBarArray.indexOf(element) < 4 ? navLink : extLink;
});

export const NavBar = props => {
    return (
        <nav id="Navbar">
            <LinksList divId="Links-list-div" ulId="Links-list" links={links} />
        </nav>
    );
}