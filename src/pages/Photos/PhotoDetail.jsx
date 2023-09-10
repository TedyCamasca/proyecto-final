import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "../../components/NavLink";
import { useParams } from "react-router-dom";
import "../../styles/pages/Photos/photoDetail.css";

export const PhotoDetail = () => {
  const { id } = useParams();
  const URL_PHOTO = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const { data: photo, loading, error } = useFetch(URL_PHOTO);

  if (loading) {
    return <p className="photo-detail__loading">Cargando foto...</p>;
  }

  if (error) {
    return <p className="photo-detail__error">Error: {error.message}</p>;
  }

  if (!photo) {
    return <p className="photo-detail__not-found">No se encontró la foto.</p>;
  }

  return (
    <div className="photo-detail">
      <h1 className="photo-detail__title">{photo.title}</h1>
      <img src={photo.url} alt={photo.title} className="photo-detail__image" />
      <NavLink to={`/albums/${photo.albumId}`} className="photo-detail__link">
        Ver Álbum
      </NavLink>
    </div>
  );
};
