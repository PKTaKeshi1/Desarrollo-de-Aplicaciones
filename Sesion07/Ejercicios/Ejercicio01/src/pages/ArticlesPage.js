import { Link } from 'react-router-dom';
import { articles } from '../data'; // Importamos los datos

export const ArticlesPage = () => {
  return (
    <div className="articles-list">
      <h2>Lista de Artículos</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id} className="article-item">
            <Link to={`/articulos/${article.id}`}>{article.title}</Link>
            <p>{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};