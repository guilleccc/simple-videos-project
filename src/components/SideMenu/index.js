import React, { Component } from 'react';
import {
  Nav
} from 'reactstrap';
import Category from './Category';
import './styles.scss';

class SideMenu extends Component {
  
  render() {
    const {categories} = this.props;

    return (
      <div className="side-menu">

        <Nav vertical>
          {categories.map((category, i) =>
            <Category key={i} category={category} />
          )}
        </Nav>
        
      </div>
    );
  }
}

export default SideMenu;
