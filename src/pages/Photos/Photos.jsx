import { NavLink } from "../../components/NavLink";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/pages/Photos/photos.css";

export const Photos = () => {
  const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";
  const { data: photos, loading, error } = useFetch(URL_PHOTOS);

  if (loading) {
    return <p className="photos__loading">Cargando fotos...</p>;
  }

  if (error) {
    return <p className="photos__error">Error: {error.message}</p>;
  }

  return (
    <div className="photos">
      <h1 className="photos__title">Todas las Fotos</h1>
      <div className="photos__list">
        {photos ? (
          photos.map((photo) => (
            <div className="photos__item" key={photo.id}>
              <NavLink to={`/photos/${photo.id}`} className="photos__link">
                {photo.title}
              </NavLink>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="photos__image"
              />
            </div>
          ))
        ) : (
          <p className="photos__no-data">No se encontraron fotos.</p>
        )}
      </div>
    </div>
  );
};
