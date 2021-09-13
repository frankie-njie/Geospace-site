import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavBar(props) {
  const navBarItems = [
    { to: "/", title: "Home" },
    { to: "/services", title: "Services" },
    { to: "/about", title: "About" },
    { to: "/contact", title: "Contacts" },
    { to: "/products", title: "Products" },
  ];
  const [activeItems, setActiveItems] = useState([]);

  function handleClick(i) {
    const _activeItems = new Array(navBarItems.length).fill(false);
    _activeItems[i] = true;
    setActiveItems(_activeItems);
  }

  // function getLinks (){
  //   let navLinks = document.getElementsByClassName('nav-link');
  //   navLinks.forEach(element => {
  //     element.addEventListener('click', handleClicks)
  //   });
  // }

  return (
    <Navbar
      collapseOnSelect
      className="navbar"
      expand="lg"
      bg=""
      fixed="top"
      variant="dark"
    >
      <Container className="navbar-content" fluid="md">
        <Navbar.Brand href="/">GEOSPACE AFRICA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            {navBarItems.map((item, i) => (
              <Link
                onClick={() => handleClick(i)}
                key={i}
                className={`nav-item nav-link ${
                  activeItems[i] ? "active" : ""
                }`}
                to={item.to}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
