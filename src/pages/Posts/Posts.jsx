import { NavLink } from "../../components/NavLink.jsx";
import { useFetch } from "../../hooks/useFetch.js";
import "../../styles/pages/Posts/posts.css";

export const Posts = () => {
  const URL_POST = "https://jsonplaceholder.typicode.com/posts";
  const { data: posts, loading, error } = useFetch(URL_POST);

  if (loading) {
    return <p className="posts__loading">Cargando...</p>;
  }

  if (error) {
    return <p className="posts__error">Error: {error.message}</p>;
  }

  return (
    <main className="posts__container">
      <h1 className="posts__title">Todos los Posts</h1>
      <section className="posts__list">
        {posts ? (
          posts.map((post) => (
            <div className="posts__item" key={post.id}>
              <h2 className="posts__item--title">
                <NavLink to={`/posts/${post.id}`} className="posts__link">
                  {post.title}
                </NavLink>
              </h2>
              <p className="posts__item-body">{post.body}</p>
            </div>
          ))
        ) : (
          <p className="posts__no-data">No hay datos disponibles.</p>
        )}
      </section>
    </main>
  );
};
