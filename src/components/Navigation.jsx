// React Bootstrap
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// React Bootstrap Icons
import { ArrowLeftCircle, InfoCircle, CardChecklist, CheckCircle } from "react-bootstrap-icons";

// React Router
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <Navbar bg="dark-subtle" expand="lg">
            <Container className="w-100">
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
                    <Nav defaultActiveKey="home">
                        <Nav.Link eventKey="home">
                            <Link
                                to="/"
                                className="py-3"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <CardChecklist className="me-2" />
                                Todos
                            </Link>
                        </Nav.Link>

                        <Nav.Link eventKey="about">
                            <Link
                                to="/about"
                                className="py-3"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <InfoCircle className="me-2" />
                                About
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="https://davidbasilefilho.github.io/">
                            <ArrowLeftCircle className="me-2" />
                            Go back
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
