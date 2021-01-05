import { mediaQueriesInit } from './mediaQueries/mediaQueries'
import { popupsInit } from './modules/popups'
import { menuInit } from './modules/menu'
import { inputsMaskInit } from './modules/inputsMask'
import { datePickerInit } from './modules/datePicker'
import { customSelectInit } from './modules/select'
import { validationInit } from './modules/validation'
import { smoothScroll } from './modules/smoothScroll'
import { closedMobileMenuInit } from './modules/closedMobileMenu'

// initFunctions
menuInit()
inputsMaskInit()
popupsInit()
datePickerInit()
customSelectInit()
validationInit()
smoothScroll()
mediaQueriesInit()
closedMobileMenuInit()
