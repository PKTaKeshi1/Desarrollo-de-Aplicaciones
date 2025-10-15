import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos todos nuestros componentes de página
import Layout from '../../eje7.1/src/pages/Layout';
import { HomePage } from '../../eje7.1/src/pages/HomePage';
import { ArticlesPage } from '../../eje7.1/src/pages/ArticlesPage';
import { ArticleDetailPage } from '../../eje7.1/src/pages/ArticleDetailPage';
import { AuthorPage } from '../../eje7.1/src/pages/AuthorPage';
import { NotFoundPage } from '../../eje7.1/src/pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* La ruta padre usa el Layout y anida todas las demás */}
        <Route path="/" element={<Layout />}>

          {/* Ruta por defecto que se muestra en la raíz "/" */}
          <Route index element={<HomePage />} />

          {/* Rutas específicas */}
          <Route path="articulos" element={<ArticlesPage />} />

          {/* Ruta dinámica para el detalle que a su vez anida otra ruta */}
          <Route path="articulos/:id" element={<ArticleDetailPage />}>
            {/* Ruta anidada para el autor */}
            <Route path="autor" element={<AuthorPage />} />
          </Route>

          {/* La ruta "*" actúa como comodín para páginas no encontradas */}
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);