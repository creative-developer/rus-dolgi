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
    passportSeries: {
      required: true,
      passportSeries: true,
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
    name: {
      required: true,
      minlength: 2,
      cyryllic: true,
    },
    middlename: {
      required: true,
      minlength: 2,
      cyryllic: true,
    },
    surname: {
      required: true,
      minlength: 2,
      cyryllic: true,
    },
    inn: {
      required: true,
      inn: true,
    },
    driverCert: {
      required: true,
      driverCert: true,
    },
    stateSign: {
      required: true,
      stateSign: true,
    },
    vehicleCertificate: {
      required: true,
      vehicleCertificate: true,
    },
    pay_method: {
      required: true,
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
