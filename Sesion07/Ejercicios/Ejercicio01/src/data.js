export const articles = [
  {
    id: 1,
    title: 'Introducción a React Hooks',
    excerpt: 'Descubre cómo los Hooks te permiten usar estado y otras características de React sin escribir una clase.',
    content: `Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.

    El Hook de estado, 'useState', es el más común. Te permite añadir estado local a tus componentes de función.
    Otro Hook fundamental es 'useEffect', que te permite realizar efectos secundarios, como la obtención de datos o la suscripción a eventos.`
  },
  {
    id: 2,
    title: 'Gestión de Estado con Context API',
    excerpt: 'Aprende a evitar el "prop drilling" utilizando la API de Contexto nativa de React para compartir estado global.',
    content: `La API de Contexto de React proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

    Esto es especialmente útil para datos que pueden ser considerados "globales" para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.
    Context se crea con 'React.createContext' y se consume con el Hook 'useContext'.`
  },
  {
    id: 3,
    title: 'Enrutamiento Avanzado en React',
    excerpt: 'Explora técnicas como rutas anidadas y dinámicas con React Router para crear SPAs complejas y bien estructuradas.',
    content: `React Router es la librería estándar para el enrutamiento en aplicaciones React.
    
    Las rutas dinámicas te permiten renderizar un componente basado en un parámetro en la URL, como un ID de producto (ej. '/productos/:id').
    Las rutas anidadas te permiten construir layouts complejos donde una parte de la UI cambia mientras otra permanece constante.`
  },
];

export const authorInfo = {
  name: 'Ana Coder',
  bio: 'Ana es una apasionada desarrolladora de software especializada en el ecosistema de JavaScript. Con años de experiencia en la creación de aplicaciones web modernas, disfruta compartiendo su conocimiento sobre React, Node.js y buenas prácticas de desarrollo.'
};