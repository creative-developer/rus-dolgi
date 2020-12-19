import { servicesCardSlider, servicesCardSliderSettings } from '../modules/sliders'

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
    () => {},
    () => {},
  )
  MQ(
    breakpoints.md,
    () => {
      servicesCardSlider.trigger('destroy.owl.carousel').removeClass('owl-carousel')
    },
    () => {
      servicesCardSlider
        .owlCarousel(servicesCardSliderSettings)
        .addClass('owl-carousel')
        .trigger('refresh.owl.carousel')
    },
  )

  MQ(
    breakpoints.sm,
    () => {
      // news filters horizontal scroll width calc
      $(window).on('load', function () {
        let filtersWidth = 5

        $('.news-filters__item').each(function (index, item) {
          filtersWidth += $(item).outerWidth(true)
        })

        $('.news-filters__list').css('width', filtersWidth)
      })
    },
    () => {
      // news filters horizontal scroll width calc
      $('.news-filters__list').css('width', 'auto')
    },
  )
}
