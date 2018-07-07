import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className={this.props.className} dark>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
    <Nav onClick={this.toggleNavbar} navbar>
              {this.props.navBarItems}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}