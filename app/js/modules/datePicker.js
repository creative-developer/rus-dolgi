import { validator } from './validation'

// Multilangual datepicker
$.fn.datepicker.languages['ru-RU'] = {
  format: 'dd.mm.YYYY',
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  weekStart: 1,
  startView: 0,
  yearFirst: false,
  yearSuffix: '',
}

// Datepicker
const datePickerSelector = $('[data-toggle="datepicker"]')
export const datePickerInit = () => {
  datePickerSelector
    .datepicker({
      language: 'ru-RU',
      autoHide: true,
    })
    .on('pick.datepicker', function (e) {
      setTimeout(function () {
        validator.element('input[name="birthDate"]')
      }, 100)
    })

  $('.input__icon-wrap').on('click', function (e) {
    e.stopPropagation()
    $(this).siblings().focus()
  })
}
