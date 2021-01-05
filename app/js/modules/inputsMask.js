export const inputsMaskInit = () => {
  // Phone input mask
  $('input[name="phone"]').inputmask('+7 (999) 999-99-99')
  $('input[name="birthDate"]').inputmask('99.99.9999')
}
