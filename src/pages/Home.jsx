import { NavLink } from "../components/NavLink";
import "../styles/pages/home.css";

export const Home = () => {
  return (
    <main className="home">

      <div className="home__content">
        

        <div className="home__title">
          <h1> Final <span> Project </span>{" "} </h1>
        </div>
          

        <div className="home__links">
           
          <NavLink to="/posts" className="home__links--button">
            Ver Posts
          </NavLink>

          <NavLink to="/comments" className="home__links--button">
            Ver Comentarios
          </NavLink>

          <NavLink to="/albums" className="home__links--button">
            Ver Álbumes
          </NavLink>

        </div>

        <div className="home__links">
          <NavLink to="/users" className="home__links--button">
            Ver Usuarios
          </NavLink>

          <NavLink to="/photos" className="home__links--button">
            Ver Fotos
          </NavLink>

          <NavLink to="/todos" className="home__links--button">
            Ver Tareas
          </NavLink>
          
        </div>  

      </div>
      
        <div className="image-container">
          <img src="../src/components/img/Hero.png" alt="ImgHero" />
      </div>
    </main>
  );
};
