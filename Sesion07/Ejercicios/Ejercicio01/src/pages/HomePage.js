import { useNavigate } from 'react-router-dom';
import { articles } from '../data'; // Importamos los datos

export const HomePage = () => {
  const navigate = useNavigate();

  const handleRandomArticle = () => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomId = articles[randomIndex].id;
    navigate(`/articulos/${randomId}`);
  };

  return (
    <div className="home-page">
      <h2>Bienvenido al Blog de Desarrollo Web</h2>
      <p>Un espacio para aprender y explorar las tecnologías más modernas del desarrollo de aplicaciones.</p>
      <button onClick={handleRandomArticle}>Leer un Artículo Aleatorio</button>
    </div>
  );
};