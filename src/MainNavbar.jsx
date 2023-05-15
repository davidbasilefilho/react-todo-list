// React Bootstrap
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export function MainNavbar() {
    return (
        <Navbar bg="dark-subtle" expand="lg">
            <Container>
                <Navbar.Brand href="?p=home">React Todo List</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#?p=home">Todos</Nav.Link>
                        <Nav.Link href="#?p=about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
