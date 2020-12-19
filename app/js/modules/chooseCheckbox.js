export const chooseCheckboxexInit = () => {
  const choseBtn = $('.choose-btn')
  const checkboxChooseAll = choseBtn.find('input[name="choose-all"]')
  const checkboxes = choseBtn.siblings().find('input[type="checkbox"]')

  checkboxChooseAll.change(function () {
    const isChecked = $(this).is(':checked')

    if (isChecked) {
      checkboxes.prop('checked', true)
    } else {
      checkboxes.prop('checked', false)
    }
  })

  checkboxes.change(function () {
    const checkedItems = choseBtn.siblings().find('input[type="checkbox"]:checked')

    if (checkedItems.length === checkboxes.length) {
      checkboxChooseAll.prop('checked', true)
    } else {
      checkboxChooseAll.prop('checked', false)
    }
  })
}
