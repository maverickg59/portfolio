import React, {Component} from 'react';
import Hamburger from '../../ReactStrap/Hamburger';
import { LinksList } from '../../SubComponents/LinksList';
import { FaGithub, FaLinkedinSquare, FaHome, FaArchive, FaTerminal, FaBriefcase } from 'react-icons/lib/fa';
// FaGamepad
import { NavItem, NavLink } from 'reactstrap';
const navBarArray = [
    {'Home': ['#Home-div', <FaHome />]}, 
    {'About': ['#About-me-div', <FaArchive />]}, 
    {'Projects': ['#My-projects-div', <FaTerminal />]},  
    // {'Games': ['#games', <FaGamepad />]},
    {'Resume': ['https://drive.google.com/open?id=1gtAjRko0TLO5CoZJkBvS2Xs1oa_FOl3B', <FaBriefcase />]},
    {"GitHub": ["https://github.com/maverickg59", <FaGithub />]},
    {"LinkedIn": ["https://www.linkedin.com/in/chrisewhite/", <FaLinkedinSquare />]}]
const links = navBarArray.map(element => {
    const key = Object.keys(element);
    const link = Object.values(element)[0][0];
    const icon = Object.values(element)[0][1];
    const navLink = <a className="List-item" id="Nav-list-item" key={key} href={link}><div className="NavBar-icon">{icon}</div><li>{key}</li></a>;
    const extLink = <a className="List-item" id="Nav-list-item" key={key} href={link} target="_blank" ><div className="NavBar-icon">{icon}</div><li>{key}</li></a>;
    return navBarArray.indexOf(element) < 4 ? navLink : extLink; 
});
const hamburgerLinks = navBarArray.map(element => {
    const key = Object.keys(element);
    const link = Object.values(element)[0][0];
    const icon = Object.values(element)[0][1];
    const navLink = <NavItem key={key}><NavLink href={link} ><div>{icon}</div>{key}</NavLink></NavItem>;
    const extLink = <NavItem key={key}><NavLink href={link} target="_blank"><div>{icon}</div>{key}</NavLink></NavItem>;
    return navBarArray.indexOf(element) < 4 ? navLink : extLink;
});


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth};

        this.navBar = this.navBar.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    forceUpdateHandler(){
        this.forceUpdate();
    }
    navBar() {
        if (this.state.width > 775) {
            return <LinksList divClassName="Green-background" divId="Links-list-div" ulId="Links-list" links={links} />;
        } else {
            return <Hamburger className="Green-background" navBarItems={hamburgerLinks}/>;
        }
    }
    render() {
        return (
            <nav id="Navbar">
                {this.navBar()}
            </nav>
        );
    }
}

export default NavBar;
