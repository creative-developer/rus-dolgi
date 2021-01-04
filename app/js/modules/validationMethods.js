export const inputs = [
  {
    selector: 'fullname',
    regexp: /^[А-Яа-я][а-я]{2,}(?:\s+[А-Яа-я][а-я]{2,})?(?:\s+[А-Яа-я][а-я]{2,})(?:\s+)*\r?$/,
  },
  {
    selector: 'birthDate',
    regexp: /^[0-9\.]{10}?$/,
  },
  {
    selector: 'cyryllic',
    regexp: /^[а-я\s?-\s?А-Я]*\s?\s?$/,
  },
  {
    selector: 'phone',
    regexp: /^.. [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}\s?$/,
  },
]
