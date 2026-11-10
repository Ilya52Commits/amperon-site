import type { Example } from '@/data/examples';
import styles from './ExampleCard.module.css';

interface ExampleCardProps {
  example: Example;
}

export function ExampleCard({ example }: ExampleCardProps) {
  return (
    <article className={styles.card}>
      {example.image ? (
        <img src={example.image} alt="" className={styles.image} />
      ) : (
        <div className={styles.image} /> // серая заглушка
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{example.title}</h3>
        <p className={styles.text}>{example.text}</p>
      </div>
    </article>
  );
}