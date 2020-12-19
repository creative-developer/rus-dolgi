const sliderArrow =
  '<svg class="icon icon--owl-arrow"><use xlink:href="img/svg-sprite.svg#owl-arrow"></use></svg>'

export const servicesCardSlider = $('.services-section__slider')
export const servicesCardSliderSettings = {
  loop: true,
  items: 3,
  margin: 0,
  nav: true,
  dots: false,
  smartSpeed: 1000,
  navSpeed: 1000,
  navText: [sliderArrow, sliderArrow],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
  },
  onInitialized: function (e) {
    const slider = $(e.target)
    const sliderNav = slider.find('.owl-nav')
    if (sliderNav.hasClass('disabled')) {
      slider.addClass('nav-disabled')
    } else {
      slider.removeClass('nav-disabled')
    }
  },
}

export const slider = () => {
  const newsSlider = $('.news-slider')
  const newsSliderSettings = {
    loop: true,
    items: 3,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navSpeed: 1000,
    navText: [sliderArrow, sliderArrow],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
    },
  }
  newsSlider.owlCarousel(newsSliderSettings)
}
