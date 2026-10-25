// Склеивает имена классов, пропуская «пустые» значения.
// cx('a', isOpen && 'b') -> 'a b' или 'a'
export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(' ');
}
