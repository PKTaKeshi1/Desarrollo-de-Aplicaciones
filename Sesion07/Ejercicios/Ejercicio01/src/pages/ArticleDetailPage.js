import { useParams, Link, Outlet } from 'react-router-dom';
import { articles } from '../data'; // Importamos los datos
import { NotFoundPage } from './NotFoundPage';

export const ArticleDetailPage = () => {
  const { id } = useParams();
  // Buscamos el artículo por ID. ¡Importante convertir el id de la URL a número!
  const article = articles.find(art => art.id === parseInt(id));

  // Si no se encuentra el artículo, mostramos la página de error
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="article-detail">
      <h3>{article.title}</h3>
      <p className="article-content">{article.content}</p>
      <hr />
      <Link to="autor" className="author-link">Sobre el Autor</Link>
      
      <Outlet />
    </div>
  );
};