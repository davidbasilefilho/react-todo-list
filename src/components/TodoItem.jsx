import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className="mt-3" style={{ listStyleType: "none" }}>
            <Row className="d-flex align-items-center">
                <Col xs="auto">
                    <Form.Check
                        checked={completed}
                        onChange={(e) => toggleTodo(id, e.target.checked)}
                    ></Form.Check>
                </Col>
                <Col md="auto" xs="8">
                    {title}
                </Col>
                <Col xs={1}>
                    <Button onClick={() => deleteTodo(id)} variant="outline-danger" size="sm">
                        Delete
                    </Button>
                </Col>
            </Row>
        </li>
    );
}
