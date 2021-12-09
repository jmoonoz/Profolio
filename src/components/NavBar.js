import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';


function NavBar() {
    return (
        <header>
            <NavBar className="navbar-trans" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        Joel Mooñoz
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href='/' >HOME</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/About'>ABOUT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/Design'>DESIGN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/'>SHOP</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/Contact">CONTACT</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavBar>
        </header>
    );
}

export default NavBar;
