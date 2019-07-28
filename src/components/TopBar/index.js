import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.scss';
import TopCategory from './TopCategory';

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {categories} = this.props;
    const {isOpen} = this.state;

    return (
      <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Videos example</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {categories.map((category, i) =>
                <TopCategory key={i} category={category} />
              )}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default TopBar;
