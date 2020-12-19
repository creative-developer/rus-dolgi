import { mfpPopup } from './mfpPopup'

// Popup opener
export const popupsInit = () => {
  $('.js-popup').click(function (event) {
    event.preventDefault()
    let popupID = $(this).attr('href')

    mfpPopup(popupID)
  })
}
