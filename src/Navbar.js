import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavBar = ({dogs}) => {
  console.log("in navbar");

  const links = dogs.map(dog => (
    <NavLink
      key={dog.name} 
      to={'/dogs/' + dog.name}>
      {dog.name}
    </NavLink>)
  )

  return (
    <div>
      <nav>
        <NavLink to='/dogs'>Home</NavLink>
        {links}
      </nav>


    </div>
  );
};

export default NavBar;