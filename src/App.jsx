// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// React
import { useState } from "react";

function MainForm() {
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem) {
            setTodos((currentTodos) => {
                return [
                    ...currentTodos,
                    { id: crypto.randomUUID(), title: newItem, completed: false },
                ];
            });
        }

        setNewItem("");
    }

    console.log(todos);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="px-3" controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="1">
                        New Item
                    </Form.Label>
                    <Col sm="11">
                        <Form.Control
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            type="text"
                            className="border-dark w-100"
                        />
                    </Col>
                </Form.Group>
                <Container fluid className="d-grid gap-2 px-3 mt-4">
                    <Button variant="primary" size="md" type="submit">
                        Add Item
                    </Button>
                </Container>
            </Form>
            <hr className="my-4" />
            <Container fluid>
                <h3>Todo list</h3>

                <ul>
                    {todos.map((todo) => {
                        return (
                            <>
                                <li key={todo.id} className="w-100 ps-4">
                                    <Form.Label>
                                        <Row className="d-flex align-items-center">
                                            <Col xs={1}>
                                                <Form.Check checked={todo.completed}></Form.Check>
                                            </Col>
                                            <Col xs="auto">{todo.title}</Col>
                                            <Col xs={1}>
                                                <Button variant="outline-danger" size="sm">
                                                    Delete
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form.Label>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </Container>
        </>
    );
}

function MainNavbar() {
    return (
        <Navbar bg="dark-subtle" expand="lg">
            <Container>
                <Navbar.Brand href="?p=home">React Todo List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#?p=home">Home</Nav.Link>
                        <Nav.Link href="#?p=about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default function App() {
    return (
        <>
            <MainNavbar></MainNavbar>

            <Container>
                <Card className="shadow bg-dark-subtle border-dark p-3 mt-3">
                    <h2 className="text-center mb-4">React Todo List</h2>
                    <MainForm></MainForm>
                </Card>
            </Container>
        </>
    );
}
