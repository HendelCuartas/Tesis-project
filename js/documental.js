
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
  getVideos();
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
      title: 'Huellas de vida documental interactivo Asoparupa - Video 1',
      id: 'MqZ6l46tV3g',
      image: 'https://i.ytimg.com/vi/MqZ6l46tV3g/mqdefault.jpg'
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
      id: 'fbNglufVzRQ',
      image: 'https://i.ytimg.com/vi/fbNglufVzRQ/mqdefault.jpg'
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
      id: 'Sk0P86SKUzU',
      image: 'https://i.ytimg.com/vi/Sk0P86SKUzU/mqdefault.jpg'
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
      id: 'airtVzrKZk8',
      image: 'https://i.ytimg.com/vi/airtVzrKZk8/mqdefault.jpg'
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
      id: 'irdFkdVOwUY',
      image: 'https://i.ytimg.com/vi/irdFkdVOwUY/mqdefault.jpg'
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
      id: 'KFHmzaTCnbk',
      image: 'https://i.ytimg.com/vi/KFHmzaTCnbk/mqdefault.jpg'
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
      id: 'FbTg3YJgRg8',
      image: 'https://i.ytimg.com/vi/FbTg3YJgRg8/mqdefault.jpg'
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
      id: '0Pd1eDaRtnU',
      image: 'https://i.ytimg.com/vi/0Pd1eDaRtnU/mqdefault.jpg'
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
      id: 'h8Ds3zBb1s8',
      image: 'https://i.ytimg.com/vi/h8Ds3zBb1s8/mqdefault.jpg'
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
      id: 'OaW-pVNqz0E',
      image: 'https://i.ytimg.com/vi/OaW-pVNqz0E/mqdefault.jpg'
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
      id: 'F5eznXyjyj8',
      image: 'https://i.ytimg.com/vi/F5eznXyjyj8/mqdefault.jpg'
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
      id: 'GdndTwAS060',
      image: 'https://i.ytimg.com/vi/GdndTwAS060/mqdefault.jpg'
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
      id: '-SbejEa6KWQ',
      image: 'https://i.ytimg.com/vi/-SbejEa6KWQ/mqdefault.jpg'
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
      id: 'HeXy3VL64kY',
      image: 'https://i.ytimg.com/vi/HeXy3VL64kY/mqdefault.jpg'
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
      id: 'n-hObyQO544',
      image: 'https://i.ytimg.com/vi/n-hObyQO544/mqdefault.jpg'
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
      id: 'hY02chp85Rs',
      image: 'https://i.ytimg.com/vi/hY02chp85Rs/mqdefault.jpg'
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
      id: 'qWoPKk10WbQ',
      image: 'https://i.ytimg.com/vi/qWoPKk10WbQ/mqdefault.jpg'
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
      id: 'VLVjfKzssYs',
      image: 'https://i.ytimg.com/vi/VLVjfKzssYs/mqdefault.jpg'
    }
  }
  ]
};

map.on('load', function () {

  getVideos();
  geojson.features.forEach(function (marker) {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<div class="card" >
      <img class="video-pop-up" src=${marker.properties.image} onclick="openVideo('${marker.properties.id}')" />
      <h4>${marker.properties.title}</h4>
    </div>`))
      .addTo(map);
  });
})

//linea del sethtml es el error  `<iframe src="${marker.properties.url}" onclick="openVideo(splitString(4)" frameborder="0" allowfullscreen></iframe>`
