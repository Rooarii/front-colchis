import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="none" light expand="md">
        <NavbarBrand href="/">
          <img src="https://cdn.glitch.com/774f67da-7f04-4bcb-b47f-3d6dc10bb0c7%2Fcoat-of-arm.png?v=1590934721050" alt="colchis" width="62px" height="54" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto navbar-nav" navbar>
            <NavItem className="mx-auto">
              <Link to="/">Home</Link>
            </NavItem>
            {/* <NavItem className="mx-auto">
              <NavLink href="https://github.com/reactstrap/reactstrap">Royalty</NavLink>
            </NavItem> */}
            <NavItem className="mx-auto">
              <Link to="/bellatores">Bellatores</Link>
            </NavItem>
            <NavItem className="mx-auto">
              <Link to="/oratores">Oratores</Link>
            </NavItem>
            {/* <NavItem className="mx-auto">
              <NavLink href="https://github.com/reactstrap/reactstrap">Laboratores</NavLink>
            </NavItem> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
