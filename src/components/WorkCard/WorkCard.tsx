import type { ServiceWork } from '@/data/services';
import styles from './WorkCard.module.css';

interface WorkCardProps {
  work: ServiceWork;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <article className={styles.card}>
      {work.image ? (
        <img src={work.image} alt="" className={styles.image} />
      ) : (
        <div className={styles.image} /> // серая заглушка
      )}
      <h3 className={styles.title}>{work.title}</h3>
    </article>
  );
}