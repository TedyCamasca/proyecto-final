import { NavLink } from "../../components/NavLink";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/pages/Users/users.css";
export const Users = () => {
  const URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const { data: users, loading, error } = useFetch(URL_USERS);

  if (loading) {
    return <p className="users__loading">Cargando usuarios...</p>;
  }

  if (error) {
    return <p className="users__error">Error: {error.message}</p>;
  }

  return (
    <main className="users">
      <h1 className="users__title">Todos los Usuarios</h1>
      <section className="users__list">
        {users ? (
          users.map((user) => (
            <div className="users__item" key={user.id}>
              <NavLink to={`/users/${user.id}`} className="users__link">
                {user.name} ({user.username})
              </NavLink>
            </div>
          ))
        ) : (
          <p className="users__no-data">No se encontraron usuarios.</p>
        )}
      </section>
    </main>
  );
};
