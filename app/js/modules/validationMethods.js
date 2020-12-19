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
    selector: 'passportSeries',
    regexp: /^[0-9\s]{11,12}?$/,
  },
  {
    selector: 'inn',
    regexp: /^[0-9]{12}?$/,
  },
  {
    selector: 'phone',
    regexp: /^.. [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}\s?$/,
  },
  {
    selector: 'driverCert',
    regexp: /^[0-9а-яА-Я]{2}[0-9а-яА-Я]{2}[0-9а-яА-Я]{6}\s?$/,
  },
  {
    selector: 'stateSign',
    regexp: /^[А-Я]{1}[0-9]{3}[А-Я]{2}[0-9]{2,3}/,
  },
  {
    selector: 'vehicleCertificate',
    regexp: /^[0-9]{10}?$/,
  },
]
