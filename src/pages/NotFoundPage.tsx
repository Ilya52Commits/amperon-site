import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container" style={{ paddingBlock: 48 }}>
      <h1>Страница не найдена</h1>
      <p style={{ marginTop: 16 }}>
        <Link to="/" style={{ color: 'var(--color-accent)' }}>
          Вернуться на главную
        </Link>
      </p>
    </div>
  );
}
