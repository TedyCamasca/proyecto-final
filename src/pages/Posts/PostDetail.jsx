import { NavLink } from "../../components/NavLink.jsx";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/pages/Posts/postDetail.css";

export const PostDetail = () => {
  const { id } = useParams();
  const URL_POST = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const URL_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

  const {
    data: post,
    loading: postLoading,
    error: postError,
  } = useFetch(URL_POST);
  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch(URL_COMMENTS);

  if (postLoading || commentsLoading) {
    return <p className="post-detail__loading">Cargando...</p>;
  }

  if (postError || commentsError) {
    return (
      <p className="post-detail__error">
        Error: {postError || commentsError.message}
      </p>
    );
  }

  if (!post) {
    return <p className="post-detail__not-found">No se encontró el post.</p>;
  }

  return (
    <main className="post-detail">
      <section className="post-detail__content">
        <h1 className="post-detail__title">{post.title}</h1>
        <p className="post-detail__body">{post.body}</p>
      </section>
      <h2 className="post-detail__comments--subtitle">Comentarios: </h2>
      <section className="post-detail__comments">
        {comments.map((comment) => (
          <div className="post-detail__comment" key={comment.id}>
            <p>
              Nombre:
              <strong className="post-detail__comment-name">
                {comment.name}
              </strong>
            </p>
            <p>
              Email:
              <strong className="post-detail__comment-email">
                {comment.email}
              </strong>
            </p>
            <p>
              Comentario:
              <strong className="post-detail__comment-body">
                {comment.body}
              </strong>
            </p>
          </div>
        ))}
      </section>
      <NavLink to="/posts" className="post-detail__back-link">
        Volver a Mis Posts
      </NavLink>
    </main>
  );
};
