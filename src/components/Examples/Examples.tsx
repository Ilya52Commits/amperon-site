import { useState } from 'react';
import type { CSSProperties, TransitionEvent } from 'react';
import { ExampleCard } from '@/components/ExampleCard/ExampleCard';
import { examples } from '@/data/examples';
import { cx } from '@/utils/cx';
import styles from './Examples.module.css';

const count = examples.length;
// три копии подряд: запас слева и справа для бесконечной прокрутки
const slides = [...examples, ...examples, ...examples];

export function Examples() {
  // стартуем с первой карточки средней копии
  const [index, setIndex] = useState(count);
  // анимация нужна при кликах и не нужна при «невидимом» перепрыгивании
  const [animate, setAnimate] = useState(true);

  const move = (direction: 1 | -1) => {
    setAnimate(true);
    setIndex((current) => current + direction);
  };

  // Вызывается, когда анимация сдвига закончилась.
  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    // игнорируем чужие transition (например, hover у карточек)
    if (event.target !== event.currentTarget) return;

    if (index >= count * 2) {
      setAnimate(false);
      setIndex(index - count); // перепрыгиваем назад в среднюю копию
    } else if (index < count) {
      setAnimate(false);
      setIndex(index + count); // перепрыгиваем вперёд в среднюю копию
    }
  };

  return (
    <section id="examples" className={styles.examples}>
      <h2 className={styles.title}>Примеры работ</h2>

      <div className={styles.slider}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => move(-1)}
          aria-label="Назад"
        >
          <svg
            width="14"
            height="26"
            viewBox="0 0 14 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 1 2 13l10 12" />
          </svg>
        </button>

        {/* viewport: «окно», которое обрезает всё, что за его пределами */}
        <div className={styles.viewport}>
          <div
            className={cx(styles.track, !animate && styles.noAnimation)}
            style={{ '--index': index } as CSSProperties}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((example, i) => (
              <div key={i} className={styles.item}>
                <ExampleCard example={example} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => move(1)}
          aria-label="Вперёд"
        >
          <svg
            width="14"
            height="26"
            viewBox="0 0 14 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m2 1 10 12L2 25" />
          </svg>
        </button>
      </div>
    </section>
  );
}