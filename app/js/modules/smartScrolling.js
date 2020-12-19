const smartScrolling = () => {
  const headerHeight = 20
  const scrollTop = $(window).scrollTop()
  const nav = $('.faq-nav')
  const containerTopPosition = $('.faq__row').offset().top - headerHeight
  const containerHeight = $('.faq-content').outerHeight()
  const navHeight = nav.outerHeight()
  const stopPosition = containerHeight - navHeight

  if (scrollTop > containerTopPosition) {
    nav.addClass('scrolled')
  } else {
    nav.removeClass('scrolled')
  }

  if (scrollTop > stopPosition + containerTopPosition) {
    nav.css('top', stopPosition)
    nav.css('position', 'absolute')
  } else {
    nav.css('position', 'fixed')
    nav.removeAttr('style')
  }
}

export const smartScrollingInit = () => {
  if ($('.faq').length && $('body').width() >= 992) {
    smartScrolling()
    $(window).scroll(smartScrolling)
  }
}
