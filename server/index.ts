import express from 'express';
import nodemailer from 'nodemailer';
import path from 'node:path';

const app = express();
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name = '', email = '', phone = '' } = req.body ?? {};

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanPhone = String(phone).trim();

  const isValid =
    cleanName.length >= 2 && cleanName.length <= 100 &&
    /^\S+@\S+\.\S+$/.test(cleanEmail) && cleanEmail.length <= 200 &&
    cleanPhone.replace(/\D/g, '').length >= 10 && cleanPhone.length <= 30;

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: cleanEmail,
      subject: 'Новая заявка с сайта',
      text: [`Имя: ${cleanName}`, `Email: ${cleanEmail}`, `Телефон: ${cleanPhone}`].join('\n'),
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    res.status(500).json({ error: 'Ошибка отправки' });
  }
});

// Раздаём собранный фронтенд.
const dist = path.resolve('dist');
app.use(express.static(dist));

// Любой другой адрес отдаёт index.html: страницами занимается React Router.
app.use((_req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));