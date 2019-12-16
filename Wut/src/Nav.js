import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import "./css/Nav.css";

export default class Navi extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Wut</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#profile/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#profile/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#profile/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link className="mr-sm-1" href="login">Sign In</Nav.Link>
                    <Nav.Link className="mr-sm-1" href="register">Register</Nav.Link>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
