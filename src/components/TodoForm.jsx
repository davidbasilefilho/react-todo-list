// React
import { useState } from "react";

// React Bootstrap
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function TodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!newItem) return;

        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="px-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Item</Form.Label>
                    <Form.Control
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        type="text"
                        className="border-0 w-100"
                    />
                </Form.Group>
                <Container fluid className="d-grid gap-2 px-3 mt-3">
                    <Button variant="primary" size="md" type="submit">
                        Add Item
                    </Button>
                </Container>
            </Form>
        </>
    );
}
