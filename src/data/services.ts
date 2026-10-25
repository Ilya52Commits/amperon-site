// Список направлений. По нему строятся карточки на главной, колонка «Услуги»
// в подвале и страница услуги (/services/:slug). Данные вынесены отдельно,
// чтобы менять тексты, не трогая вёрстку.

export interface Service {
  slug: string; // кусок адреса: /services/power-systems
  title: string;
}

export const services: Service[] = [
  { slug: 'power-systems', title: 'Силовые электросистемы и электроснабжение' },
  { slug: 'lighting', title: 'Системы освещения' },
  { slug: 'cable-systems', title: 'Кабельные системы и кабельные трассы' },
  { slug: 'grounding', title: 'Заземление и молниезащита' },
  { slug: 'equipment-power', title: 'Электроснабжение и подключение оборудования' },
  { slug: 'fire-alarm', title: 'Пожарная сигнализация' },
  { slug: 'evacuation', title: 'Управление эвакуацией' },
  { slug: 'video-surveillance', title: 'Видеонаблюдение' },
];

export function findService(slug: string | undefined): Service | undefined {
  return services.find((service) => service.slug === slug);
}
