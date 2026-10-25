import { Link } from 'react-router-dom';
import logoWhite from '@/assets/main-logos/Bottom-logo.png';
import { contacts } from '@/data/contacts';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img src={logoWhite} alt="" />
        </div>

        <nav className={styles.column} aria-label="Навигация по сайту">
          <ul className={styles.list}>
            <li>
              <Link to="/#about">О нас</Link>
            </li>
            <li>
              <Link to="/#services">Услуги</Link>
            </li>
            <li>
              <Link to="/#examples">Примеры работ</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.title}>Контакты</h2>
          <ul className={styles.list}>
            <li>
              <a href={contacts.phoneHref}>{contacts.phone}</a>
            </li>
            <li>{contacts.address}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
