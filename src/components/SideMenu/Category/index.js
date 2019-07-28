import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import NavLinkCategory from '../../NavLinkCategory';
import {icons} from '../../../helpers/icons';
import './styles.scss';

class Category extends Component {

  render() {
    const { name, id, subcategories } = this.props.category;
    const url = `/category/${id}`;
    const icon = icons[id];

    return (
      <div>
        <NavLink tag={Link} to={url} className='category'>
          <i className={`fas ${icon}`}></i>
          {name}
        </NavLink>
        {subcategories && 
            <Nav vertical>
                {subcategories.map( (subcategory, i) => (
                    <NavItem key={i}>  
                      <NavLinkCategory category={subcategory} />
                    </NavItem>)
                )}
            </Nav>
        }
        <hr />
      </div>
    );
  }
}

export default Category;
