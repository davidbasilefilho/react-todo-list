// React Bootstrap
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

// React Bootstrap Icons
import { ArrowLeftCircleFill, HouseDoorFill, InfoCircleFill } from "react-bootstrap-icons";

// React Router
import { Link } from "react-router-dom";

export function MainNavbar() {
    return (
        <Navbar bg="dark-subtle" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link
                        to="/"
                        className="py-3"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        React Todo List
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link
                                to="/"
                                className="py-3"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <HouseDoorFill className="me-2" />
                                Home
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="https://davidbasilefilho.github.io/">
                            <ArrowLeftCircleFill className="me-2" />
                            Go back
                        </Nav.Link>

                        <Nav.Link>
                            <Link
                                to="/about"
                                className="py-3"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <InfoCircleFill className="me-2" />
                                About
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
