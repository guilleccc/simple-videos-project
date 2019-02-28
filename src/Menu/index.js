import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import './styles.css';
import Category from './Category';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5be2fc042f00006d00ca21f6')
      .then(r => r.json())
      .then(json => {
        this.setState({
          results: (json && json.result) || []
        });
      });
  }

  render() {
    return (
      <div>

        <Nav vertical>
        {this.state.results.map(
          (category, i) =>
            <Category key={i} category={category} />
          )}
        
        <p>Popular 2</p>

          <NavItem>
            <NavLink tag={Link} to="/">World</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/components/">Music</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="#">Moviews</NavLink>
          </NavItem>
        </Nav>
        
      </div>
    );
  }
}

export default Menu;
