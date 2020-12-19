import { addSelectArrow } from './select'
import { validator } from './validation'

const carValidationRules = {
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
}

const phoneRules = {
  phone: {
    required: true,
    phone: true,
  },
}

export const checkTravelBanSteps = () => {
  const form = $('.check-travel-ban-form')
  const steps = $('.check-travel-ban-form__steps')

  if (form.length) {
    const prevBtn = form.find('.js-prev-step')
    const nextBtn = form.find('.js-next-step')
    const stepTitle = $('.check-travel-ban-form__title')
    const progressLine = $('.check-travel-ban-form__progress-line')

    steps.owlCarousel({
      loop: false,
      items: 1,
      margin: 0,
      nav: false,
      dots: false,
      autoHeight: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      onInitialized: function (event) {
        const currentCarousel = $(event.target)
        setTimeout(() => {
          $('select').trigger('refresh')
          setTimeout(() => {
            addSelectArrow()
          }, 1)
        }, 1)

        // remove rules hidden inputs
        removeRules(carValidationRules)
        removeRules(phoneRules)

        // progress
        setTimeout(() => {
          progressLine.css('width', `${100 / event.item.count + 1}%`)
        }, 500)

        // go to next step
        nextBtn.click(function () {
          const currentStep = currentCarousel.find('.owl-item.active')
          const currentStepIndex = currentStep.index()

          if (validateStep(currentStep)) {
            steps.trigger('next.owl.carousel')
            if (currentStepIndex === 2) {
              form.submit()
            }
          }
        })
        // go to prev step
        prevBtn.click(function () {
          steps.trigger('prev.owl.carousel')
        })
      },
      onTranslate: function (event) {
        let index = event.item.index + 1

        // step counter
        $('.check-travel-ban-form__steps-counter span').html(index)
        $('.check-travel-ban-form__step-number').html(index)

        // title toggle
        stepTitle.find('span').removeClass('show')
        stepTitle.find(`span:nth-child(${index})`).addClass('show')

        // progress
        progressLine.css('width', `${(100 / event.item.count + 1) * index}%`)
      },
    })

    $('input[name="IHaveCar"]').change(function () {
      const form = $('.i-have-car-form')

      if ($(this).prop('checked')) {
        form.addClass('show')
        addRules(carValidationRules)
      } else {
        form.removeClass('show')
        removeRules(carValidationRules)
      }

      steps.trigger('refresh.owl.carousel')
    })

    $('input[name="sendSms"]').change(function () {
      const form = $('.send-sms-form')

      if ($(this).prop('checked')) {
        form.addClass('show')
        addRules(phoneRules)
      } else {
        form.removeClass('show')
        removeRules(phoneRules)
      }

      steps.trigger('refresh.owl.carousel')
    })
  }
}

const validateStep = (step) => {
  let valid = {}
  let inputs = $(step).find('input:not(:disabled), select')
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]
    valid[i] = validator.element(input)
  }
  for (let key in valid) {
    if (!valid[key]) {
      return false
    }
  }
  return true
}

const addRules = (elements = {}) => {
  const inputs = Object.keys(elements)

  inputs.forEach((input) => {
    $(`input[name=${input}]`).rules('add', elements[input])
    $(`input[name=${input}]`).removeClass('valid').removeClass('error')
  })
}

const removeRules = (elements = {}) => {
  const inputs = Object.keys(elements)

  inputs.forEach((input) => {
    $(`input[name=${input}]`).rules('remove')
    $(`input[name=${input}]`).removeClass('valid').removeClass('error')
  })
}
