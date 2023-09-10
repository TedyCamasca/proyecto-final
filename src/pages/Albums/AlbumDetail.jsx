import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "../../components/NavLink";
import { useParams } from "react-router-dom";
import "../../styles/pages/Albums/albumDetail.css";
export const AlbumDetail = () => {
  const { id } = useParams();
  const URL_ALBUM = `https://jsonplaceholder.typicode.com/albums/${id}`;
  const { data: album, loading, error } = useFetch(URL_ALBUM);

  if (loading) {
    return <p className="album-detail__loading">Cargando álbum...</p>;
  }

  if (error) {
    return <p className="album-detail__error">Error: {error.message}</p>;
  }

  if (!album) {
    return <p className="album-detail__not-found">No se encontró el álbum.</p>;
  }

  return (
    <main className="album-detail">
      <h1 className="album-detail__title">{album.title}</h1>
      <p className="album-detail__user-id">ID del Usuario: {album.userId}</p>
      <NavLink
        to={`/users/${album.userId}`}
        className="album-detail__user-link"
      >
        Ver Usuario
      </NavLink>
    </main>
  );
};
