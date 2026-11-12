import { Button } from '@/components/Button/Button';
import { WorkCard } from '@/components/WorkCard/WorkCard';
import type { ServiceSection } from '@/data/services';
import { useShowMore } from '@/hooks/useShowMore';
import styles from './WorkSection.module.css';

const INITIAL_COUNT = 6; // два ряда по три, как в макете

interface WorkSectionProps {
  section: ServiceSection;
}

export function WorkSection({ section }: WorkSectionProps) {
  const { visible, hasMore, showAll } = useShowMore(section.works, INITIAL_COUNT);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{section.title}</h2>

        <div className={styles.panel}>
          <div className={styles.grid}>
            {visible.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>

        {hasMore && (
          <div className={styles.more}>
            <Button variant="outline" onClick={showAll}>
              Показать больше
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}