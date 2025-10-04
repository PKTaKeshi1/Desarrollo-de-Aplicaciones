import { useParams, Link } from 'react-router-dom';

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  return (
    <div>
      <h3>Detalles del Curso</h3>
      <p>Mostrando información para el curso: <strong>{courseId}</strong></p>
      <Link to="/cursos">Volver a la lista de cursos</Link>
    </div>
  );
};
