import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "../../components/NavLink";
import { useParams } from "react-router-dom";
import "../../styles/pages/Comments/commentDetail.css";
export const CommentDetail = () => {
  const { id } = useParams();
  const URL_COMMENT = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const { data: comment, loading, error } = useFetch(URL_COMMENT);

  if (loading) {
    return <p className="comment-detail__loading">Cargando comentario...</p>;
  }

  if (error) {
    return <p className="comment-detail__error">Error: {error.message}</p>;
  }

  if (!comment) {
    return (
      <p className="comment-detail__not-found">No se encontró el comentario.</p>
    );
  }

  return (
    <main className="comment-detail">
      <h1 className="comment-detail__name">{comment.name}</h1>
      <p className="comment-detail__email">Email: {comment.email}</p>
      <p className="comment-detail__body">Comentario: {comment.body}</p>

      <NavLink to={`/posts/${comment.postId}`} className="comment-detail__link">
        Ir al Post
      </NavLink>
    </main>
  );
};
