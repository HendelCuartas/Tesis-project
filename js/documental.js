var acercamiento = 10;

function closeWaitScreen() {
  $('.wait-screen').css('display', 'none');
}

function playSound(soundfile) {
  document.getElementById("dummy").innerHTML= `<embed src=\""
    +soundfile+"\" hidden=\"true\" autostart=\"true\"
    loop=\"false\" />`;
}

function onLoadPage() {
  closeWaitScreen();
}

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVuZGVsY3VhcnRhcyIsImEiOiJjamlveDZ3YTUwdW91M3BxaGN3NHNqMWFyIn0.EnbWjk5wHR478Pgi95UjOQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  zoom: 20,
  center: [-77.00544781668299, 3.8711397708862423],
});

const geojson = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.00534405725284, 3.8710632529502957]
      },
      properties: {
        title: 'video-uno',
        url: 'https://www.youtube.com/embed/MqZ6l46tV3g'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.00537715811697, 3.8711164516110927]
      },
      properties: {
        title: 'video-dos',
        url: 'https://www.youtube.com/embed/fbNglufVzRQ'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.00537508331252, 3.8712022018439494]
      },
      properties: {
        title: 'video-tres',
        url: 'https://www.youtube.com/embed/Sk0P86SKUzU'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.00531914223507, 3.871250439269989]
      },
      properties: {
        title: 'Sixta Zambrano',
        url: 'https://www.youtube.com/embed/airtVzrKZk8'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.0052575949939, 3.871246274954631]
      },
      properties: {
        title: 'Sixta Zambrano',
        url: 'https://www.youtube.com/embed/irdFkdVOwUY'
      }
    }
  ]
};



map.on('load', function () {
  geojson.features.forEach(function (marker) {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<iframe src="${marker.properties.url}" frameborder="0" allowfullscreen></iframe>`))
      .addTo(map);
  });
})

