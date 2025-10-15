import { authorInfo } from '../data'; // Importamos los datos

export const AuthorPage = () => {
  return (
    <div className="author-bio">
      <h4>Biografía de {authorInfo.name}</h4>
      <p>{authorInfo.bio}</p>
    </div>
  );
};