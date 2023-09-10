import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/pages/Users/userDetail.css";
export const UserDetail = () => {
  const { id } = useParams();
  const URL_USER = `https://jsonplaceholder.typicode.com/users/${id}`;
  const { data: user, loading, error } = useFetch(URL_USER);

  if (loading) {
    return <p className="user-detail__loading">Cargando usuario...</p>;
  }

  if (error) {
    return <p className="user-detail__error">Error: {error.message}</p>;
  }

  if (!user) {
    return <p className="user-detail__not-found">No se encontró el usuario.</p>;
  }

  return (
    <main className="user-detail">
      <h1 className="user-detail__name">{user.name}</h1>
      <table className="user-detail__table">
        <tbody>
          <tr>
            <td className="user-detail__label">Username:</td>
            <td className="user-detail__value">{user.username}</td>
          </tr>
          <tr>
            <td className="user-detail__label">Email:</td>
            <td className="user-detail__value">{user.email}</td>
          </tr>
          <tr>
            <td className="user-detail__label">Phone:</td>
            <td className="user-detail__value">{user.phone}</td>
          </tr>
          <tr>
            <td className="user-detail__label">Website:</td>
            <td className="user-detail__value">{user.website}</td>
          </tr>
          <tr>
            <td className="user-detail__label">Address:</td>
            <td className="user-detail__value">
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </td>
          </tr>
          <tr>
            <td className="user-detail__label">Company:</td>
            <td className="user-detail__value">{user.company.name}</td>
          </tr>
          <tr>
            <td className="user-detail__label">Catch Phrase:</td>
            <td className="user-detail__value">{user.company.catchPhrase}</td>
          </tr>
          <tr>
            <td className="user-detail__label">Business:</td>
            <td className="user-detail__value">{user.company.bs}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
