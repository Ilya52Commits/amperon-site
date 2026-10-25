import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServicePage } from '@/pages/ServicePage';

// Таблица маршрутов: какой адрес какую страницу показывает.
// Все страницы вложены в Layout, поэтому шапка и подвал общие.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
