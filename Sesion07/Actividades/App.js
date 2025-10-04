import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Content } from './components/Content';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Experiencia N°03 - Context API</h1>
      <ThemeSwitcher />
      <Content />
    </div>
  );
}

export default App;
