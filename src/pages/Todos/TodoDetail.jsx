import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "../../components/NavLink";
import { useParams } from "react-router-dom";
import "../../styles/pages/Todos/todoDetail.css";

export const TodoDetail = () => {
  const { id } = useParams();
  const URL_TODO = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const { data: todo, loading, error } = useFetch(URL_TODO);

  if (loading) {
    return <p className="todo-detail__loading">Cargando tarea...</p>;
  }

  if (error) {
    return <p className="todo-detail__error">Error: {error.message}</p>;
  }

  if (!todo) {
    return <p className="todo-detail__not-found">No se encontró la tarea.</p>;
  }

  return (
    <div className="todo-detail">
      <h1 className="todo-detail__title">Tarea: {todo.title}</h1>
      <p className="todo-detail__id">ID: {todo.id}</p>
      <p className="todo-detail__completed">
        Completada: {todo.completed ? "Sí" : "No"}
      </p>
      <NavLink to={`/users/${todo.userId}`} className="todo-detail__link">
        Ver Usuario
      </NavLink>
    </div>
  );
};
