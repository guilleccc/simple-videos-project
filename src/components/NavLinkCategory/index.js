import React, { Component } from 'react';
import { 
  NavLink,
} from 'reactstrap';


class NavLinkCategory extends Component {

  render() {
    const { category } = this.props;
    const url = `/category/${category.id}`;

    return (
      <NavLink href={url}>{category.name}</NavLink>
    );
  }
}

export default NavLinkCategory;
