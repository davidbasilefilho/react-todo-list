import { Container, Card } from "react-bootstrap";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

export function TodosPage({ todos, addTodo, toggleTodo, deleteTodo }) {
    return (
        <>
            <Card className="shadow bg-dark-subtle border-0 p-3">
                <h2 className="text-center">React Todo List</h2>

                <hr />

                <TodoForm onSubmit={addTodo}></TodoForm>

                <hr className="my-4" />

                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
            </Card>
        </>
    );
}
