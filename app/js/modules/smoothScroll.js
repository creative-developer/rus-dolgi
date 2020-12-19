export const smoothScroll = () => {
  $('.js-scroll').click(function (e) {
    e.preventDefault()
    const attr = $(this).attr('href').replace('#', '')
    const el = $(`[data-id=${attr}]`)
    const headerHeight = 20

    if (el.length) {
      const position = el.offset().top - headerHeight
      $('body, html').animate({ scrollTop: position }, 700)

      return false
    }
  })
}
