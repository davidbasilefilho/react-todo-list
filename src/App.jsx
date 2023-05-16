// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// React
import { useState, useEffect } from "react";

// React Bootstrap
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

// React Router
import { Routes, Route, redirect } from "react-router-dom";

// Custom JSX
import { TodoForm } from "./components/TodoForm";
import { MainNavbar } from "./components/MainNavbar";
import { TodoList } from "./components/TodoList";
import { TodosPage } from "./TodosPage";
import { AboutPage } from "./AboutPage";
import { NotFound } from "./NotFound";

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
        </>
    );
}
