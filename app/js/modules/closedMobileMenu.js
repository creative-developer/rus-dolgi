const closedMobileMenu = () => {
  const scrollTop = $(window).scrollTop()

  if (scrollTop > 100) {
    $('.mobile-menu').removeClass('opened')
    $('.hamburger').removeClass('is-active')
  }
}

export const closedMobileMenuInit = () => {
  $(window).on('scroll', () => {
    closedMobileMenu()
  })
}
