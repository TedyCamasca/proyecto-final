import { NavLink } from "../components/NavLink";
import { Outlet } from "react-router-dom";
import "../styles/components/layout.css";
export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__init">
          Inicio
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};
