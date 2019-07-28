import React, { Component } from 'react';
import { 
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import NavLinkCategory from '../../NavLinkCategory';
import {icons} from '../../../helpers/icons';
import './styles.scss';
 

class TopCategory extends Component {

  render() {
    const { name, id, subcategories } = this.props.category;
    const url = `/category/${id}`;
    const icon = icons[id];

    return (
      <div>
        {!subcategories && 
        <NavLink tag={Link} to={url} className='top-category'>
          <i className={`fas ${icon}`}></i>
          {name}
        </NavLink>
        }
        
        {subcategories && 
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className='top-category'>
            <i className={`fas ${icon}`}></i>
            {name}
            </DropdownToggle>
            <DropdownMenu right>
              {subcategories.map( (subcategory, i) => (
                <DropdownItem key={i}>
                  <NavLinkCategory category={subcategory} />
                </DropdownItem>
              ))}
 
            </DropdownMenu>
          </UncontrolledDropdown>
            
        }
        
      </div>
    );
  }
}

export default TopCategory;
