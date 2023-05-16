import { Container, Card } from "react-bootstrap";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

export function TodosPage({ todos, addTodo, toggleTodo, deleteTodo }) {
    return (
        <>
            <h2 className="text-center mb-4">React Todo List</h2>

            <TodoForm onSubmit={addTodo}></TodoForm>

            <hr className="my-4" />

            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
        </>
    );
}