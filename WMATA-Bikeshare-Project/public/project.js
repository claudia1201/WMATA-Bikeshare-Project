var successFunction = function(object) {
    _.each(object, function(object){
      var templates = {
        station: Handlebars.compile( $("#station").html() ),
        bike: Handlebars.compile( $("#bike").html() ),
        buses: Handlebars.compile( $("#buses").html() )
      }



      $(".stationBox").append( templates.station(object.station) )
      $(".bikeBox").append( templates.bike(object.bike) )
      $(".busBox").append( templates.buses(object.buses) )

      //console.log(object)
      //console.log(Object.station)
      //station.distance = Math.floor((station.distance*10)/10)
      //station.distance = station.distance.toFixed(1)
    }) 
}
$(document).on("ready", function() { 

    //setInterval( function () {
        function success(position) {
              var x = position.coords;
              $.ajax({
              url: "http://9407a789.ngrok.io/transit",
              method: "GET",
              data: {
                latitude: x.latitude,
                longitude: x.longitude
              },
              success: successFunction
             })
        } 


      var x = function () {navigator.geolocation.getCurrentPosition(success)}
    //} , 5000)
  setInterval(x, 60000)
})
    //),60000)
      /*successFunction({
            station: [
              {
                name: "Dupont",
                address: "1 Dupont Circle",
                distance: "540 meters",
                train: [
                  {
                    Line: "red",
                    Min: "20 min"
                  },
                  {
                    Line: "Silver",
                    Min:"30 min"
                  }
                ]
              },
              {
                name: "Farragut North",
                address: "1 Dupont Circle",
                distance: "540 meters",
                train: [
                  {
                    Line: "red",
                    Min: "20 min"
                  },
                  {
                    Line: "Silver",
                    Min:"30 min"
                  }
                ]
              },
              {
                name: "Dupont",
                address: "1 Dupont Circle",
                distance: "540 meters",
                train: [
                  {
                    Line: "red",
                    Min: "20 min"
                  },
                  {
                    Line: "Silver",
                    Min:"30 min"
                  }
                ]
              },
            ],

            bike: [
              {
                name: "Whole Foods P Street",
                nbBikes:5,
                nbEmptyDocks:3
              },

              {
                name: "Whole Foods P Street",
                nbBikes:5,
                nbEmptyDocks:3
              },
              {
                name: "Whole Foods P Street",
                nbBikes:5,
                nbEmptyDocks:3
              },
              {
                name: "Whole Foods P Street",
                nbBikes:5,
                nbEmptyDocks:3
              }

            ],

            bus: [
              {
                stopName: "Georgia Ave And Henderson Ave",
                Minutes:"12 Minutes",
                directionText:"Silver Spring"
                
              },

              {
                stopName: "Georgia Ave And Henderson Ave",
                Minutes:"12 Minutes",
                directionText:"Silver Spring"
                
              },
              {
                stopName: "Georgia Ave And Henderson Ave",
                Minutes:"12 Minutes",
                directionText:"Silver Spring"
                
              },
              {
                stopName: "Georgia Ave And Henderson Ave",
                Minutes:"12 Minutes",
                directionText:"Silver Spring"
                
              },
              {
                stopName: "Georgia Ave And Henderson Ave",
                Minutes:"12 Minutes",
                directionText:"Silver Spring"
                
              }
            ]
      })*/
