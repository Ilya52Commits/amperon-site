import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import styles from './MainPage.module.css';
import ButtomLogo from '@/assets/main-logos/Bottom-logo-black.png'

// Временная заглушка: проверяем, что роутинг работает.
// Дальше сюда добавим секции: Hero, О нас, Направления, Примеры, Заявка.
export function MainPage() {
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

          <button className={styles.heroButton}>Оставить заявку</button>
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
    </>
  );
}
