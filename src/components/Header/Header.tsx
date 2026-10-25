import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/main-logos/Origin-logo.png';
import TelegramIcon from '@/assets/icons-social-networks-contacts/tg-icon.svg';
import MaxIcon from '@/assets/icons-social-networks-contacts/max-icon.svg';
import { contacts } from '@/data/contacts';
import { cx } from '@/utils/cx';
import styles from './Header.module.css';

// Пункты меню ведут к секциям главной страницы по якорям (#about и т. д.).
const navItems = [
  { label: 'О нас', hash: '#about' },
  { label: 'Услуги', hash: '#services' },
  { label: 'Примеры', hash: '#examples' },
];

export function Header() {
  // Открыто ли мобильное меню. useState хранит это значение между
  // перерисовками, а при его смене React сам обновляет разметку.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Амперон: энергия ваших решений" />
        </Link>

        {/* На десктопе эта обёртка «прозрачна» (display: contents),
            на мобильных превращается в выпадающую панель. */}
        <div
          id="site-menu"
          className={cx(styles.panel, isMenuOpen && styles.panelOpen)}
        >
          <nav className={styles.nav} aria-label="Основное меню">
            {navItems.map((item) => (
              <Link
                key={item.hash}
                to={`/${item.hash}`}
                className={cx(
                  styles.link,
                  pathname === '/' && hash === item.hash && styles.linkActive
                )}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={contacts.phoneHref} className={styles.phone}>
              {contacts.phone}
            </a>
            <div className={styles.socials}>
              <a
                href={contacts.telegram}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <img src={TelegramIcon} alt="Telegram-лого" />
              </a>
              <a
                href={contacts.max}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAX"
              >
                <img src={MaxIcon} alt="MAX-лого" />
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={cx(styles.burger, isMenuOpen && styles.burgerOpen)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
