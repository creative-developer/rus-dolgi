const breakpoints = {
  xl: '(max-width: 1199px)',
  lg: '(max-width: 991px)',
  md: '(max-width: 767px)',
  sm: '(max-width: 575px)',
  xsm: '(max-width: 374px)',
}
const MQ = $.mq.action

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.lg,
    () => {},
    () => {},
  )
  MQ(
    breakpoints.md,
    () => {},
    () => {},
  )

  MQ(
    breakpoints.sm,
    () => {},
    () => {},
  )
}
