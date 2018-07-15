

function closeWaitScreen() {
  $('.wait-screen').css('display', 'none');
}

function playSound(soundfile) {
  document.getElementById("dummy").innerHTML = `<embed src=\""
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
  zoom: 14,
  center: [-77.01440794068435, 3.8741092616790826],
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
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.00931917162126, 3.8742967394096306]
    },
    properties: {
      title: 'María Ortega',
      url: 'https://www.youtube.com/embed/KFHmzaTCnbk'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.00958007767514, 3.8743708488698445]
    },
    properties: {
      title: 'Silvia Ortega',
      url: 'https://www.youtube.com/embed/FbTg3YJgRg8'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.009414755931, 3.8743659070905783]
    },
    properties: {
      title: 'Silvia y María Ortega, Stella Cuero',
      url: 'https://www.youtube.com/embed/0Pd1eDaRtnU'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.02245918213856, 3.8738132672310837]
    },
    properties: {
      title: 'Parturienta',
      url: 'https://www.youtube.com/embed/h8Ds3zBb1s8'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.02253282080045, 3.8737615967159753]
    },
    properties: {
      title: 'María Peña',
      url: 'https://www.youtube.com/embed/OaW-pVNqz0E'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.02249685478245, 3.873752333045005]
    },
    properties: {
      title: 'María Peña',
      url: 'https://www.youtube.com/embed/F5eznXyjyj8'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.02244479551035, 3.873771168224894]
    },
    properties: {
      title: 'María Peña',
      url: 'https://www.youtube.com/embed/GdndTwAS060'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.02249815017302, 3.8738256738827315]
    },
    properties: {
      title: 'María Peña',
      url: 'https://www.youtube.com/embed/-SbejEa6KWQ'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.02252509416502, 3.873815081685012]
    },
    properties: {
      title: 'María Peña',
      url: 'https://www.youtube.com/embed/HeXy3VL64kY'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.00531315926901, 3.871085559757514]
    },
    properties: {
      title: 'Partera Graciela',
      url: 'https://www.youtube.com/embed/n-hObyQO544'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.00530014445098, 3.871119401449661]
    },
    properties: {
      title: 'María Peña',
      url: 'https://www.youtube.com/embed/hY02chp85Rs'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.00529048239423, 3.8711458838949104]
    },
    properties: {
      title: 'Melina Hernández',
      url: 'https://www.youtube.com/embed/qWoPKk10WbQ'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.00527350521361, 3.871176102025013]
    },
    properties: {
      title: 'Cerafina Castillo',
      url: 'https://www.youtube.com/embed/VLVjfKzssYs'
    }
  }
  ]
};
var spliteado;
function splitString(url) {
  spliteado = url.split('/');
  //console.log(spliteado);
}

map.on('load', function () {

  geojson.features.forEach(function (marker) {
    const el = document.createElement('div');
    el.className = 'marker';
    splitString(marker.properties.url);
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<iframe src="${marker.properties.url}" frameborder="0" allowfullscreen></iframe>`))
      .addTo(map);
  });
})
