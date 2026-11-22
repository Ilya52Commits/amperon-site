import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { contacts } from '@/data/contacts';
import styles from './RequestForm.module.css';
import PhoneIcon from '@/assets/icons-social-networks-contacts/phone-icon.svg'
import TgIcon from '@/assets/icons-social-networks-contacts/tg-icon.svg'
import MaxIcon from '@/assets/icons-social-networks-contacts/max-icon.svg'
import AdressIcon from '@/assets/icons-social-networks-contacts/adress-icon.svg'

type Field = 'email' | 'name' | 'phone';
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'success' | 'error';

// Поля описаны данными, чтобы не копировать разметку трижды.
const fields: { name: Field; label: string; type: string; autoComplete: string }[] = [
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'name', label: 'Имя', type: 'text', autoComplete: 'name' },
  { name: 'phone', label: 'Телефон', type: 'tel', autoComplete: 'tel' },
];

const emptyValues: Values = { email: '', name: '', phone: '' };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Введите корректный email';
  }
  if (values.name.trim().length < 2) {
    errors.name = 'Введите имя';
  }
  if (values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Введите телефон';
  }
  return errors;
}

// 2. Меняем функцию sendRequest
async function sendRequest(values: Values): Promise<void> {
  // Правильный путь: слэш в начале и точка перед netlify
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error('Ошибка');
}

export function RequestForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  // Одна функция на все поля: какое поле меняем, берём из атрибута name.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name as Field;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined })); // убираем ошибку при вводе
    setStatus('idle');
  };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('sending');
    try {
      await sendRequest(values); // <-- Вызовется реальная отправка
      setValues(emptyValues);
      setStatus('success');
    } catch (error) {
      console.error('Ошибка отправки:', error); // Для отладки в консоли
      setStatus('error');
    }
  };

  return (
    <section id="request" className={styles.request}>
      <div className="container">
        <h2 className={styles.title}>Оставить заявку</h2>

        <div className={styles.inner}>
          <ul className={styles.contacts}>
            <li>
              <a href={contacts.phoneHref}>
                <img src={PhoneIcon} alt="Телефон" />
                {contacts.phone}</a>
            </li>
            <li>
              <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                <img src={TgIcon} alt="Telegram" />
                Telegram
              </a>
            </li>
            <li>
              <a href={contacts.max} target="_blank" rel="noopener noreferrer">
                <img src={MaxIcon} alt="MAX" />
                MAX
              </a>
            </li>
            <li>
              <a href={contacts.address}>
                <img src={AdressIcon} alt="Адрес" />
                {contacts.address}
              </a>
            </li>
          </ul>

          {/* noValidate отключает всплывающие подсказки браузера: показываем свои */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {fields.map((field) => (
              <div key={field.name} className={styles.field}>
                <label htmlFor={field.name} className="visually-hidden">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.label}
                  value={values[field.name]}
                  onChange={handleChange}
                  className={styles.input}
                  aria-invalid={Boolean(errors[field.name])}
                />
                {errors[field.name] && (
                  <span className={styles.error} role="alert">
                    {errors[field.name]}
                  </span>
                )}
              </div>
            ))}

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Отправляем…' : 'Отправить запрос'}
            </button>

            {status === 'success' && (
              <p className={styles.success} role="status">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.failure} role="alert">
                Не удалось отправить. Попробуйте позже или позвоните нам.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}