import React, { Component } from 'react'
import Hamburger from '../../ReactStrap/Hamburger'
import { LinksList } from '../../SubComponents/LinksList'
import {
  FaGithub,
  FaLinkedinSquare,
  FaHome,
  FaArchive,
  FaTerminal,
  FaBriefcase,
} from 'react-icons/lib/fa'
// FaGamepad
import { NavItem, NavLink } from 'reactstrap'
const navBarArray = [
  { Home: ['#Home-div', <FaHome />] },
  { About: ['#About-me-div', <FaArchive />] },
  { Projects: ['#My-projects-div', <FaTerminal />] },
  // {'Games': ['#games', <FaGamepad />]},
  {
    Resume: [
      'https://drive.google.com/file/d/1vk1Oyed991Gk8SV5yYSpGZ8ri4gL10mW/view?usp=sharing',
      <FaBriefcase />,
    ],
  },
  { GitHub: ['https://github.com/maverickg59', <FaGithub />] },
  {
    LinkedIn: [
      'https://www.linkedin.com/in/chrisewhite/',
      <FaLinkedinSquare />,
    ],
  },
]
const links = navBarArray.map(element => {
  const key = Object.keys(element)
  const link = Object.values(element)[0][0]
  const icon = Object.values(element)[0][1]
  const navLink = (
    <a className='List-item' id='Nav-list-item' key={key} href={link}>
      <div className='NavBar-icon'>{icon}</div>
      <li>{key}</li>
    </a>
  )
  const extLink = (
    <a
      className='List-item'
      id='Nav-list-item'
      key={key}
      href={link}
      target='_blank'>
      <div className='NavBar-icon'>{icon}</div>
      <li>{key}</li>
    </a>
  )
  return navBarArray.indexOf(element) < 3 ? navLink : extLink
})
const hamburgerLinks = navBarArray.map(element => {
  const key = Object.keys(element)
  const link = Object.values(element)[0][0]
  const icon = Object.values(element)[0][1]
  const navLink = (
    <NavItem key={key}>
      <NavLink href={link}>
        <div>{icon}</div>
        {key}
      </NavLink>
    </NavItem>
  )
  const extLink = (
    <NavItem key={key}>
      <NavLink href={link} target='_blank'>
        <div>{icon}</div>
        {key}
      </NavLink>
    </NavItem>
  )
  return navBarArray.indexOf(element) < 3 ? navLink : extLink
})

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.navBar = this.navBar.bind(this)
  }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  navBar() {
    if (this.state.width > 775) {
      return (
        <LinksList
          divClassName='Green-background'
          divId='Links-list-div'
          ulId='Links-list'
          links={links}
        />
      )
    } else {
      return (
        <Hamburger className='Green-background' navBarItems={hamburgerLinks} />
      )
    }
  }
  render() {
    return <nav id='Navbar'>{this.navBar()}</nav>
  }
}

export default NavBar
