// Список направлений. По нему строятся карточки на главной, колонка «Услуги»
// в подвале и страница услуги (/services/:slug). Данные вынесены отдельно,
// чтобы менять тексты, не трогая вёрстку.

import alarmSystemIcon from '@/assets/services-logs/alarm_system_icon.svg';
import cableSystemIcon from '@/assets/services-logs/cable_system_icon.svg';
import electricalSystemIcon from '@/assets/services-logs/electrical_systems_icon.svg';
import evacuationIcon from '@/assets/services-logs/evacuation_icon.svg';
import groundingIcon from '@/assets/services-logs/grounding_icon.svg';
import powerSupplyIcon from '@/assets/services-logs/power_supply_icon.svg';
import videoSurveillanceIcon from '@/assets/services-logs/video_surveillance_icon.svg';
import warningSystemIcon from '@/assets/services-logs/warning_system_icon.svg';

export interface Service {
  slug: string; // кусок адреса: /services/power-systems
  title: string;
  icon: string;   // путь к иконке; ? значит «может отсутствовать»
}

export const services: Service[] = [
  { slug: 'power-systems', title: 'Силовые электросистемы и электроснабжение', icon: electricalSystemIcon },
  { slug: 'lighting', title: 'Системы освещения', icon: warningSystemIcon },
  { slug: 'cable-systems', title: 'Кабельные системы и кабельные трассы', icon: cableSystemIcon },
  { slug: 'grounding', title: 'Заземление и молниезащита', icon: groundingIcon },
  { slug: 'equipment-power', title: 'Электроснабжение и подключение оборудования', icon: powerSupplyIcon },
  { slug: 'fire-alarm', title: 'Пожарная сигнализация', icon: alarmSystemIcon },
  { slug: 'evacuation', title: 'Управление эвакуацией', icon: evacuationIcon },
  { slug: 'video-surveillance', title: 'Видеонаблюдение', icon: videoSurveillanceIcon },
   
  { slug: 'power-systems', title: 'Силовые электросистемы и электроснабжение', icon: electricalSystemIcon },
  { slug: 'lighting', title: 'Системы освещения', icon: warningSystemIcon },
  { slug: 'cable-systems', title: 'Кабельные системы и кабельные трассы', icon: cableSystemIcon },
  { slug: 'grounding', title: 'Заземление и молниезащита', icon: groundingIcon },
  { slug: 'equipment-power', title: 'Электроснабжение и подключение оборудования', icon: powerSupplyIcon },
  { slug: 'fire-alarm', title: 'Пожарная сигнализация', icon: alarmSystemIcon },
  { slug: 'evacuation', title: 'Управление эвакуацией', icon: evacuationIcon },
  { slug: 'video-surveillance', title: 'Видеонаблюдение', icon: videoSurveillanceIcon }
];

export function findService(slug: string | undefined): Service | undefined {
  return services.find((service) => service.slug === slug);
}
