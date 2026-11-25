import { services } from '@/data/services';
import styles from './MainPage.module.css';
import ButtomLogo from '@/assets/main-logos/Bottom-logo-black.png'
import { useState } from 'react';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
/*import { Examples } from '@/components/Examples/Examples';*/
/*import { RequestForm } from '@/components/RequestForm/RequestForm';*/
import { Contacts } from '@/components/Contacts/Contacts';

const INITIAL_COUNT = 8;   // два ряда по 4, как в макете

// Временная заглушка: проверяем, что роутинг работает.
// Дальше сюда добавим секции: Hero, О нас, Направления, Примеры, Заявка.
export function MainPage() {
  const [showAll, setShowAll] = useState(false);

  // 1. Сначала фильтруем: берем только те, у которых нет isHidden
  const activeServices = services.filter((service) => !service.isHidden);

  // 2. Теперь применяем логику "показать больше" уже к отфильтрованному массиву
  const visibleServices = showAll ? activeServices : activeServices.slice(0, INITIAL_COUNT);
  const hasMore = activeServices.length > INITIAL_COUNT;

  const scrollToContacts = () => {
    // Находим элемент по id="contacts"
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      // Вызываем плавную прокрутку
      contactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className={styles.hero}> 
        <div className="container" style={{ paddingBlock: 120 }}>
          <h1>
            <span className={styles.accent}>Амперон</span> — монтаж силовых и <span className={styles.accent}>слаботочных</span> систем
          </h1>

          <p className={styles.heroText}>
            Выполняем электромонтаж, монтаж систем безопасности, СКС, видеонаблюдения,
            СКУД, пожарной сигнализации и других инженерных систем. Работаем по проекту
            заказчика, выполняем монтаж, пусконаладку и подготовку исполнительной
            документации.
          </p>

          {/* <button className={styles.heroButton}>Оставить заявку</button> */}
          <button className={styles.heroButton}
           onClick={scrollToContacts}
          >
            Связаться с нами
          </button>
        </div>
      </div>

      <div id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutCard}>
              <h2 className={styles.aboutTitle}>О нас</h2>
              <p className={styles.aboutText}>
                ООО «Амперон» выполняет комплекс работ по монтажу силовых и слаботочных систем на объектах различного назначения. 
              </p>
              <p className={styles.aboutText}>
                Компания может выступать как специализированным подрядчиком по отдельным инженерным системам, 
                так и единым подрядчиком по комплексному монтажу инженерной инфраструктуры объекта.
              </p>
            </div>
            <img className={styles.aboutLogo} src={ButtomLogo} alt="логотип" />
          </div>
        </div>
      </div>

      <section id="services" className={styles.services}>
        <div className="container">
          <h2 className={styles.servicesTitle}>Основные направления</h2>

          <div className={styles.serviceList}>
            {visibleServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {hasMore && !showAll && (
            <div className={styles.moreWrap}>
              <button
                type="button"
                className={styles.moreButton}
                onClick={() => setShowAll(true)}
              >
                Показать больше
              </button>
            </div>
          )}
        </div>
      </section>

      {/* <Examples /> */}
      {/* <RequestForm /> */}
      <Contacts />
    </>
  );
}
