import { NavLink } from "../../components/NavLink";
import { useFetch } from "../../hooks/useFetch.js";
import "../../styles/pages/Comments/comments.css";
export const Comments = () => {
  const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
  const { data: comments, loading, error } = useFetch(URL_COMMENTS);

  if (loading) {
    return <p className="comments__loading">Cargando comentarios...</p>;
  }

  if (error) {
    return <p className="comments__error">Error: {error.message}</p>;
  }

  return (
    <main className="comments__container">
      <h1 className="comments__title">Todos los Comentarios</h1>
      <section className="comments__list">
        {comments ? (
          comments.map((comment) => (
            <div className="comments__item" key={comment.id}>
              <NavLink
                to={`/comments/${comment.id}`}
                className="comments__link"
              >
                {comment.name}
              </NavLink>
              <p className="comments__email">{comment.email}</p>
              <p className="comments__body">{comment.body}</p>
            </div>
          ))
        ) : (
          <p className="comments__no-data">No se encontraron comentarios.</p>
        )}
      </section>
    </main>
  );
};
