import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo, selectAllTodos } from "./features/todos/todosSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);

  const handleAdd = () => {
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        title: "Nueva tarea",
        completed: false
      })
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo Pro</h1>

      <button onClick={handleAdd}>
        Agregar tarea
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center"
            }}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}>
              {todo.title}
            </span>

            <button onClick={() => dispatch(removeTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;