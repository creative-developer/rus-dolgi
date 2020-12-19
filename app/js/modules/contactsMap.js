function init() {
  let myMap
  let myPlacemark
  myMap = new ymaps.Map(
    'map',
    {
      center: [55.74751, 37.534954],
      zoom: 15,
      controls: ['default'],
      type: 'yandex#map',
    },
    {
      searchControlProvider: 'yandex#search',
    },
  )

  myPlacemark = new ymaps.Placemark([55.74751, 37.534954], {
    hintContent: '',
    balloonContent: '',
  })

  myMap.geoObjects.add(myPlacemark)
  myMap.behaviors.disable('multiTouch').disable('scrollZoom')
  myMap.controls
    .remove('searchControl')
    .remove('routeEditor')
    .remove('trafficControl')
    .remove('typeSelector')
}

function mapRequest(fn) {
  if ($('.contacts').length) {
    $.ajax({
      url: '//api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=',
      dataType: 'script',
    }).done(function () {
      ymaps.ready(fn)
    })
  }
}

export const mapInit = () => mapRequest(init)
