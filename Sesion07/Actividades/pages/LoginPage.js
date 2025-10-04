import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    login(() => navigate(from, { replace: true }));
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Iniciar Sesión</h2>
      <p>Debes iniciar sesión para acceder al panel.</p>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};
