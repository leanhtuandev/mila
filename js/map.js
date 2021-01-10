async function initMap() {  
    const infowindow = new google.maps.InfoWindow({
        content: '<h5>Minh Hoang JSC</h5>',
      });
    var mapOptions = {  
        center: new google.maps.LatLng(21.5952534, 105.8361247,15),  
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.terrain,
    } 
 
    var map = await new google.maps.Map(document.getElementById("google-map"), mapOptions);  
    var marker = await new google.maps.Marker({
        position: new google.maps.LatLng(21.5952534, 105.8361247,15),
        map: map
    }); 
    infowindow.open(map, marker);
} 