// React Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

// React Bootstrap Icons
import { ArrowLeftCircle, InfoCircle, CardChecklist, CheckCircle } from "react-bootstrap-icons";

// React Router
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <Navbar bg="dark-subtle" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link
                        to="/"
                        className="py-3"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <CheckCircle className="me-2" />
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
                                <CardChecklist className=" me-2" />
                                Todos
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link
                                to="/about"
                                className="py-3"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <InfoCircle className="me-2" />
                                About
                            </Link>
                        </Nav.Link>

                        <Nav.Link className="ms-auto" href="https://davidbasilefilho.github.io/">
                            <ArrowLeftCircle className="me-2" />
                            Go back
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
