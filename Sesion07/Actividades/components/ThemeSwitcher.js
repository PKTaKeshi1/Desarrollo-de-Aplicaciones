import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{
      background: theme === 'light' ? '#222' : '#fff',
      color: theme === 'light' ? '#fff' : '#222',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer'
    }}>
      Cambiar a modo {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};
