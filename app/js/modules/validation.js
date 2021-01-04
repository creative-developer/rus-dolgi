import { inputs } from './validationMethods'

// Validate all form in site
export let validator

jQuery.validator.setDefaults({
  rules: {
    region: {
      required: true,
    },
    fullname: {
      required: true,
      fullname: true,
    },
    birthDate: {
      required: true,
      birthDate: true,
    },
    email: {
      required: true,
      email: true,
    },
    agreement: {
      required: true,
    },
    phone: {
      required: true,
      phone: true,
    },
  },
  messages: {
    agreement: 'Обязательное поле',
    name: '',
    surname: '',
    phone: '',
    email: '',
  },
  errorPlacement: function (error, element) {},
  submitHandler: function (form) {
    // Write here your function Handler

    // form.submit();
    console.log('Submit')
  },
})

inputs.forEach(({ selector, regexp }) => {
  $.validator.addMethod(selector, function (value, element) {
    return this.optional(element) || regexp.test(value)
  })
})

export const validationInit = () => {
  $('form').each(function () {
    validator = $(this).validate()
  })
}
