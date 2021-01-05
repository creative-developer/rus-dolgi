const breakpoints = {
  xl: '(max-width: 1199px)',
  lg: '(max-width: 991px)',
  md: '(max-width: 767px)',
  sm: '(max-width: 575px)',
  xsm: '(max-width: 374px)',
}
const MQ = $.mq.action

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.lg,
    () => {
      $('.main__col').append($('.main-form__logo-wrap'))
      $('.debt-checker-form__text-wrap').prepend($('.info-logo__header'))
      $('.debt-checker-form__footer-col--right').append(
        $('.info-logo__content'),
      )
    },
    () => {
      $('.main-form__col--right').append($('.main-form__logo-wrap'))
      $('.info-logo').prepend($('.info-logo__header'))
      $('.info-logo').append($('.info-logo__content'))
    },
  )
  MQ(
    breakpoints.md,
    () => {},
    () => {},
  )

  MQ(
    breakpoints.sm,
    () => {},
    () => {},
  )
}
