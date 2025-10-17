import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'; // Asegúrate de que esta línea esté aquí

const Layout = () => {
  return (
    <div className="app-container">
      <header>
        <nav>
          {/* Usamos NavLink para obtener una clase 'active' automáticamente */}
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/articulos">Artículos</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 Mi Blog de Práctica</p>
      </footer>
    </div>
  );
};

export default Layout;