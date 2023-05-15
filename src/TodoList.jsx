// React Bootstrap
import { Container } from "react-bootstrap";

// Custom JSX
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    <Container fluid>
        <h3>Todo list</h3>

        <ul className="px-4 w-100">
            {todos.length === 0 && "No todos"}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    ></TodoItem>
                );
            })}
        </ul>
    </Container>;
}
