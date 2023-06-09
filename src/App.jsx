// React
import { useState, useEffect } from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// React Bootstrap
import { Container } from "react-bootstrap";

// Custom JSX
// -> Pages
import { TodosPage } from "./TodosPage";
import { AboutPage } from "./AboutPage";
import { NotFound } from "./NotFound";

// -> Components
import { Navigation } from "./components/Navigation";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("items");
        if (!localValue) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(todos));
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
            <Navigation />

            <Container className="my-3">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TodosPage
                                todos={todos}
                                addTodo={addTodo}
                                toggleTodo={toggleTodo}
                                deleteTodo={deleteTodo}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
}
