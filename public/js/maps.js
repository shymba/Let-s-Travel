let platform = new H.service.Platform({
    'apikey': 'quWpe2ecUuPxiQ4JeEYRiDXfSmtAPemzTH_0Vd1GhZI'
  });

    function landmarkGeocode() {
        let title = document.querySelector('h1').textContent;
        let geocoder = platform.getGeocodingService(),
            landmarkGeocodingParameters = {
                searchtext: title,
                jsonattributes: 1
            };
      
        geocoder.search(
          landmarkGeocodingParameters,
          showMap,
          (e) => console.log(e)
        );
      }

      function showMap(result) {
        
        // let location = result.response.view[0].result[0].place.location[0].displayPosition;
        // let location = result.response.view[0].result[0].place.locations[0].displayPosition;
        let location = result.response.view[0].result[0].location.displayPosition
        console.log(location);

        let defaultLayers = platform.createDefaultLayers();
        let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
            zoom: 15,
            center: { lat: location.latitude,  lng:location.longitude }
        });

        let marker = new H.map.Marker({lat: location.latitude,  lng:location.longitude});
        map.addObject(marker);

        // let mapEvents = new H.mapevents.MapEvents(map);
        // let behavior = new H.mapevents.Behavior(mapEvents);

        let ui = H.ui.UI.createDefault(map, defaultLayers);
      }

      landmarkGeocode();