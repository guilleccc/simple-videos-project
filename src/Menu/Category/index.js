import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Category extends Component {

    render() {
    const { name, id, subcategories } = this.props.category;
    const url = `/category/${id}`;
    return (
      <div>
        <NavLink href={url}>{name}</NavLink>
        {subcategories && 
            <Nav vertical>
                {subcategories.map( (subcategory, i) =>
                    <NavItem key={i}>
                        <NavLink href="#">{subcategory.name}</NavLink>
                    </NavItem>
                )}
            </Nav>
        }
        <hr />
      </div>
    );
  }
}

export default Category;
