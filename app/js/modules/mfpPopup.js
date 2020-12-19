export const mfpPopup = function (popupID, source) {
  const closeBtn =
    '<svg class="icon icon--cancel"><use xlink:href="img/svg-sprite.svg#cancel"></use></svg>'
  $.magnificPopup.open({
    items: {
      src: popupID,
    },
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    closeMarkup: `<button type="button" class="mfp-close">${closeBtn}</button>`,
    mainClass: 'mfp-fade-zoom',
    // callbacks: {
    // 	open: function() {
    // 		$('.source').val(source);
    // 	}
    // }
  })
}
