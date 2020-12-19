export const innToggleInit = () => {
  const innLink = $('.get-inn__link')
  const innLinkText = $('.get-inn__link-text')
  const innForm = $('.get-inn__form')
  const getInnBtn = $('.get-inn-btn')
  const hiddenText = innLink.attr('data-hidden-text')
  const showText = innLink.attr('data-show-text')
  const innInput = $('input[name="inn"]')

  innLink.click(function (e) {
    e.preventDefault()

    innForm.toggle(300).toggleClass('disabled')

    if (!innForm.hasClass('disabled')) {
      getInnBtn.prop('disabled', true)
      innLinkText.text(hiddenText)
      innInput.removeClass('error')
    } else {
      getInnBtn.prop('disabled', false)
      $(this).find('.get-inn__link-text').text(showText)
    }
  })
}
