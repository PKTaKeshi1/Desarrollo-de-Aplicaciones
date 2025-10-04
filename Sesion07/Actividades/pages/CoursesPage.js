import { Link } from 'react-router-dom';

export const CoursesPage = () => {
  return (
    <div>
      <h2>Nuestros Cursos Disponibles</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/cursos/react">Curso de React</Link></li>
        <li><Link to="/cursos/nodejs">Curso de Node.js</Link></li>
        <li><Link to="/cursos/sql">Curso de SQL</Link></li>
      </ul>
    </div>
  );
};
