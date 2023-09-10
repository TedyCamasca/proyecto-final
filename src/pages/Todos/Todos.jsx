import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/pages/Todos/todos.css";

export const Todos = () => {
  const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
  const { data: todos, loading, error } = useFetch(URL_TODOS);

  if (loading) {
    return <p className="todos__loading">Cargando tareas...</p>;
  }

  if (error) {
    return <p className="todos__error">Error: {error.message}</p>;
  }

  return (
    <main className="todos">
      <h1 className="todos__title">Todas las Tareas</h1>
      <ul className="todos__list">
        {todos ? (
          todos.map((todo) => (
            <li className="todos__item" key={todo.id}>
              <Link to={`/todos/${todo.id}`} className="todos__link">
                {todo.title}
              </Link>
            </li>
          ))
        ) : (
          <p className="todos__no-data">No se encontraron tareas.</p>
        )}
      </ul>
    </main>
  );
};
