import { useParams } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { findService } from '@/data/services';

// Одна страница-шаблон на все услуги. Какая именно услуга, определяет
// часть адреса /services/:slug, её достаём через useParams.
export function ServicePage() {
  const { slug } = useParams();
  const service = findService(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div className="container" style={{ paddingBlock: 48 }}>
      <h1>{service.title}</h1>
      <p style={{ marginTop: 16 }}>Здесь будет страница услуги.</p>
    </div>
  );
}
