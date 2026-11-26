import { Link } from 'react-router-dom';
import logoWhite from '@/assets/main-logos/Bottom-logo.png';
import { contacts } from '@/data/contacts';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        
        {/* 1. Логотип и название (если нужно) */}
        <div className={styles.brand}>
          <img src={logoWhite} alt="Амперон" />
        </div>

        {/* 2. Навигация */}
        <nav className={styles.column} aria-label="Навигация по сайту">
          <h2 className={styles.title}>Навигация</h2>
          <ul className={styles.list}>
            <li>
              <Link to="/#about">О нас</Link>
            </li>
            <li>
              <Link to="/#services">Услуги</Link>
            </li>
            {/* <li>
              <Link to="/#examples">Примеры работ</Link>
            </li> */}
          </ul>
        </nav>

        {/* 3. Контакты */}
        <div className={styles.column}>
          <h2 className={styles.title}>Контакты</h2>
          <ul className={styles.list}>
            <li>
              <a href={contacts.phoneHref}>{contacts.phone}</a>
            </li>
            <li>{contacts.email}</li>
          </ul>
        </div>

        {/* 4. Юридическая информация */}
        <div className={styles.column}>
          <h2 className={styles.title}>Реквизиты</h2>
          <ul className={styles.list}>
            <li>ООО «Амперон»</li>
            <li>ОГРН: 1267700301252</li>
            <li>ИНН: 9717195335</li> 
            <li>КПП: 771701001</li>
            <li>ОКПО: 83548310</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}