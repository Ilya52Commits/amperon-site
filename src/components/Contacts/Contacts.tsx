import { contacts } from '@/data/contacts';
import PhoneIcon from '@/assets/icons-social-networks-contacts/phone-icon.svg';
import TgIcon from '@/assets/icons-social-networks-contacts/tg-icon.svg';
import MaxIcon from '@/assets/icons-social-networks-contacts/max-icon.svg';
// import AddressIcon from '@/assets/icons-social-networks-contacts/adress-icon.svg';
import EmailIcon from '@/assets/icons-social-networks-contacts/email-icon.svg';
import styles from './Contacts.module.css';

interface ContactItem {
  label: string;
  value: string;
  icon: string;
  href?: string; // нет ссылки: показываем просто текст (например, адрес)
  external?: boolean; // открывать в новой вкладке
}

const items: ContactItem[] = [
  { label: 'Телефон', value: contacts.phone, icon: PhoneIcon },
  { label: 'Telegram', value: 'Связаться с нами', icon: TgIcon, href: contacts.telegram, external: true },
  { label: 'MAX', value: 'Связаться с нами', icon: MaxIcon, href: contacts.max, external: true },
  { label: 'Email', value: contacts.email, icon: EmailIcon },
];

function ContactCard({ item }: { item: ContactItem }) {
  const content = (
    <>
      <img src={item.icon} alt="" className={styles.icon} />
      <span className={styles.label}>{item.label}</span>
      <span className={styles.value}>{item.value}</span>
    </>
  );

  if (!item.href) {
    return <div className={styles.card}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      className={styles.card}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  );
}

export function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className="container">
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.subtitle}>Свяжитесь с нами удобным способом</p>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label}>
              <ContactCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}