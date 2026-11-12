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
  description?: string;
  heroImage?: string;
  sections?: ServiceSection[];
}

export interface ServiceWork {
  title: string;
  image?: string;
}

export interface ServiceSection {
  title: string;
  works: ServiceWork[];
}

export const services: Service[] = [
 {
    slug: 'power-systems',
    title: 'Силовые электросистемы и электроснабжение',
    icon: powerSupplyIcon,                    // ← оставляем, если уже подключена
    description:
      'Полный комплекс электромонтажных работ на объектах различного назначения — от коммерческих помещений до производственных объектов.',
    sections: [
      {
        title: 'Электромонтажные работы',
        works: [
          { title: 'Монтаж силовых электрических сетей' },
          { title: 'Прокладка кабельных линий' },
          { title: 'Монтаж кабельных лотков и лестниц' },
          { title: 'Монтаж кабельных каналов, труб и гофрированных систем' },
          { title: 'Монтаж распределительных коробок' },
          { title: 'Монтаж розеточных и силовых групп' },
          { title: 'Подключение электроприёмников' },
          { title: 'Монтаж и подключение оборудования' },
          { title: 'Маркировка кабельных линий' },
          { title: 'Монтаж временного электроснабжения' },
        ],
      },
      {
        title: 'Электрощитовое оборудование',
        works: [
          { title: 'Монтаж и подключение ВРУ и ГРЩ' },
          { title: 'Монтаж распределительных и силовых щитов' },
          { title: 'Монтаж шкафов управления и автоматики' },
          { title: 'Сборка и установка щитового оборудования' },
          { title: 'Установка автоматических выключателей' },
          { title: 'Установка контакторов, реле и коммутационной аппаратуры' },
          { title: 'Подключение кабельных линий' },
          { title: 'Подключение кабельных линий' },
        ],
      },
    ],
  },

  { 
    slug: 'lighting', 
    title: 'Системы освещения', 
    icon: warningSystemIcon,
    description:
      'Монтаж внутренних и наружных систем освещения для коммерческих, административных, производственных и других объектов.',
    sections: [
      {
        title: 'Виды освещения',
        works: [
          { title: 'Рабочее освещение' },
          { title: 'Аварийное и эвакуационное освещение' },
          { title: 'Фасадное и архитектурное освещение' },
          { title: 'Промышленное освещение' },
          { title: 'Освещение складских, офисных и коммерческих помещений' }
        ],
      },
      {
        title: 'Монтаж и подключение',
        works: [
          { title: 'Монтаж светильников' },
          { title: 'Монтаж выключателей и датчиков' },
          { title: 'Прокладка питающих линий' },
          { title: 'Подключение и настройка систем управления освещением' }
        ],
      },
    ],
  },

  { 
    slug: 'cable-systems', 
    title: 'Кабельные системы и кабельные трассы',
    icon: cableSystemIcon,
    description:
      'Создание организованной кабельной инфраструктуры с учётом назначения систем и требований проектной документации.',
    sections: [
      {
        title: 'Монтаж трасс',
        works: [
          { title: 'Кабельные лотки и лестницы' },
          { title: 'Металлические и пластиковые трассы' },
          { title: 'Кабельные каналы' },
          { title: 'Трубы ПВХ, гофрированные и металлические трубы' },
          { title: 'Закладные конструкции' },
          { title: 'Проходки через стены и перекрытия' }
        ],
      },
      {
        title: 'Прокладка кабелей',
        works: [
          { title: 'Силовые кабели' },
          { title: 'Контрольные кабели' },
          { title: 'Информационные кабели' },
          { title: 'Кабели пожарных систем' },
          { title: 'Оптические линии' },
          { title: 'Маркировка и организация кабельного хозяйства' }
        ],
      },
    ],
  },
  
  { 
    slug: 'grounding', 
    title: 'Заземление и молниезащита',
    icon: groundingIcon,
    description:
      'Устройство и монтаж систем защиты электроустановок и оборудования.',
    sections: [
      {
        title: 'Работы',
        works: [
          { title: 'Устройство контура заземления' },
          { title: 'Монтаж защитного и рабочего заземления' },
          { title: 'Монтаж системы уравнивания потенциалов' },
          { title: 'Монтаж заземляющих проводников' },
          { title: 'Подключение металлических конструкций' },
          { title: 'Монтаж молниеприёмников и токоотводов' },
          { title: 'Монтаж заземляющих устройств' },
          { title: 'Измерение сопротивления заземления' }
        ],
      },
    ],
  },

  { 
    slug: 'equipment-power', 
    title: 'Электроснабжение и подключение оборудования', 
    icon: powerSupplyIcon,
    description:
      'Подключение технологического и инженерного оборудования объекта.',
    sections: [
      {
        title: 'Подключение',
        works: [
          { title: 'Вентиляционное оборудование' },
          { title: 'Насосное оборудование' },
          { title: 'Кондиционеры' },
          { title: 'Холодильные установки' },
          { title: 'Производственные станки и технологические линии' },
          { title: 'Компрессоры и электродвигатели' },
          { title: 'Оборудование коммерческих помещений' },
          { title: 'Инженерные установки здания' }
        ],
      },
    ],
  },
  
  { 
    slug: 'fire-alarm', 
    title: 'Пожарная сигнализация',
    icon: alarmSystemIcon,
    description:
      'Монтаж и пусконаладка систем пожарной сигнализации в соответствии с проектными решениями и требованиями объекта.',
    sections: [
      {
        title: 'Оборудование',
        works: [
          { title: 'Пожарные дымовые и тепловые извещатели' },
          { title: 'Ручные пожарные извещатели' },
          { title: 'Приборы приёмно-контрольные' },
          { title: 'Модули и блоки оборудования' },
          { title: 'Оповещатели' },
          { title: 'Линии связи и питания' }
        ],
      },
      {
        title: 'Работы',
        works: [
          { title: 'Монтаж оборудования' },
          { title: 'Прокладка кабельных линий' },
          { title: 'Установка и подключение извещателей' },
          { title: 'Программирование и настройка' },
          { title: 'Пусконаладочные работы' },
          { title: 'Проверка работоспособности системы' }
        ],
      },
    ],
  },


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