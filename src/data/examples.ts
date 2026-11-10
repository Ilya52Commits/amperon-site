export interface Example {
  id: number;
  title: string;
  text: string;
  image?: string; // фото объекта; пока серый блок
}

export const examples: Example[] = [
  { id: 1, title: 'Текст', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' },
  { id: 2, title: 'Текст', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' },
  { id: 3, title: 'Текст', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' },
  { id: 4, title: 'Текст', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' },
];