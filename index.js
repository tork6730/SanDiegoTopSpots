

var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }






$(document).ready(function(){

$.getJSON("topspots.json", function(results){
	$(results.topspots).each(function(i, value){



$("table").append($("<tr><td>" + value.name + "</td><td>"
 + value.description + "</td><td>"
  + "<a href=https://www.google.com/maps?q=" + value.location[0] + ',' 
  + value.location[1] + "><button type=button class= 'btn btn-primary'>Open in Google Maps</button>" + "</td></tr>"));


	});
});

});