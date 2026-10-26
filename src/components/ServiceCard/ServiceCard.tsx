import { Link } from 'react-router-dom';
import type { Service } from '@/data/services';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/services/${service.slug}`} className={styles.card}>
      {service.icon && <img src={service.icon} alt="" className={styles.icon} />}
      <h3 className={styles.title}>{service.title}</h3>
    </Link>
  );
}