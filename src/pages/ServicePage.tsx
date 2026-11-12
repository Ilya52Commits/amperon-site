import { useParams } from 'react-router-dom';
import { Button } from '@/components/Button/Button';
import { Examples } from '@/components/Examples/Examples';
import { RequestForm } from '@/components/RequestForm/RequestForm';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { findService } from '@/data/services';
import { NotFoundPage } from '@/pages/NotFoundPage';
import styles from './ServicePage.module.css';

export function ServicePage() {
  const { slug } = useParams();
  const service = findService(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const scrollToRequest = () => {
    document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            {service.description && (
              <p className={styles.heroText}>{service.description}</p>
            )}
            <Button onClick={scrollToRequest}>Оставить заявку</Button>
          </div>

          {service.heroImage ? (
            <img src={service.heroImage} alt="" className={styles.heroImage} />
          ) : (
            <div className={styles.heroImage} />
          )}
        </div>
      </section>

      {service.sections?.map((section) => (
        <WorkSection key={`${service.slug}-${section.title}`} section={section} />
      ))}

      <Examples />
      <RequestForm />
    </>
  );
}