export const inputsMaskInit = () => {
  // Phone input mask
  $('input[name="phone"]').inputmask('+7 (999) 999-99-99')
  $('input[name="birthDate"]').inputmask('99.99.9999')
  $('input[name="passportSeries"]').inputmask('99 99 999999')
  $('input[name="inn"]').inputmask('999999999999')
  $('input[name="driverCert"]').inputmask('9{2}A{2}9{6}')
  $('input[name="stateSign"]').inputmask('A{1}9{3}A{2}9{2,3}')
  $('input[name="vehicleCertificate"]').inputmask('9{10}')
}
