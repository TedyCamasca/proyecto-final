import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "../../components/NavLink";
import "../../styles/pages/Albums/albums.css";
export const Albums = () => {
  const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
  const { data: albums, loading, error } = useFetch(URL_ALBUMS);

  if (loading) {
    return <p className="albums__loading">Cargando álbumes...</p>;
  }

  if (error) {
    return <p className="albums__error">Error: {error.message}</p>;
  }

  return (
    <div className="albums">
      <h1 className="albums__title">Todos los Álbumes</h1>
      <ul className="albums__list">
        {albums ? (
          albums.map((album) => (
            <li className="albums__item" key={album.id}>
              <NavLink to={`/albums/${album.id}`} className="albums__link">
                {album.title}
              </NavLink>
            </li>
          ))
        ) : (
          <p className="albums__no-data">No se encontraron álbumes.</p>
        )}
      </ul>
    </div>
  );
};
