// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// React
import { useState, useEffect } from "react";

// React Bootstrap
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

// Custom JSX
import { TodoForm } from "./TodoForm";
import { MainNavbar } from "./MainNavbar";
import { TodoList } from "./TodoList";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (!localValue) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((currentTodos) => {
            return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }];
        });
    }

    function toggleTodo(id, completed) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }

                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
            <MainNavbar></MainNavbar>

            <Container>
                <Card className="shadow bg-dark-subtle border-0 p-3">
                    <h2 className="text-center mb-4">React Todo List</h2>

                    <TodoForm onSubmit={addTodo}></TodoForm>

                    <hr className="my-4" />

                    <TodoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    ></TodoList>
                </Card>
            </Container>
        </>
    );
}
