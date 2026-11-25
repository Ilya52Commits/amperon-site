import { Link } from 'react-router-dom';
import type { Service } from '@/data/services';
import styles from './ServiceCard.module.css';
import { ENABLE_SERVICE_LINKS } from '@/config';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Если флаг true, добавляем класс isClickable
  const cardClassName = `${styles.card} ${ENABLE_SERVICE_LINKS ? styles.isClickable : ''}`;

  const content = (
    <>
      {service.icon && <img src={service.icon} alt="" className={styles.icon} />}
      <h3 className={styles.title}>{service.title}</h3>
    </>
  );

  if (!ENABLE_SERVICE_LINKS) {
    return <div className={cardClassName}>{content}</div>;
  }

  return (
    <Link to={`/services/${service.slug}`} className={cardClassName}>
      {content}
    </Link>
  );
}