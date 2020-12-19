export const debtCheckFormPos = () => {
  if ($(".debt-check-card").length) {
    const anchorOffset = $(".news-single-page__preview").position().top;

    $(".debt-check-card")
      .css("top", anchorOffset)
      .removeClass("debt-check-card--hidden");
  }
};
