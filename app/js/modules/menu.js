export const menuInit = () => {
  // Mobile menu toggle
  $('.js-menu').click(function () {
    $(this).toggleClass('is-active')
    $('.mobile-menu').toggleClass('opened')
  })
}
