import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header style={{ padding: '1rem', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>Inicio</Link>
          <Link to="/cursos" style={{ textDecoration: 'none' }}>Cursos</Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/context" style={{ textDecoration: 'none' }}>Context API</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem', minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', background: '#f0f0f0', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>© 2025 Mi Universidad - Guía de Práctica</p>
      </footer>
    </>
  );
};

export default Layout;
