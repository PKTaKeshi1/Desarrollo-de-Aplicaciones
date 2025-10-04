import { useTheme } from '../context/ThemeContext';

export const Content = () => {
  const { theme } = useTheme();

  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    borderRadius: '10px'
  };

  return (
    <div style={styles}>
      <h2>El tema actual es {theme === 'light' ? 'claro' : 'oscuro'}</h2>
    </div>
  );
};
