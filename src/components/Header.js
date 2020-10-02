import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav } from "react-bootstrap";


const Header = (props) => {
    const logged_out_nav = (
        <Nav>
        <Nav.Link href="#deets" onClick={() => props.display_form('login')}>SignIn</Nav.Link>
        <Nav.Link eventKey={2} href="#memes" onClick={() => props.display_form('signup')}>
          SignUP
        </Nav.Link>
        </Nav>
      );
    
      const logged_in_nav = (
        <ul>
          <li onClick={props.handle_logout}>logout</li>
        </ul>
      );
    return (
        <div>
        
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Navbar.Brand href="#home">Blog Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Blogger Section" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Write Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My Blogs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Edit Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
            {/* <Nav.Link href="#deets">SignIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignUP
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default Header

