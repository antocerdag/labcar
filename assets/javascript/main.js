function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat:-33.59938794981402, lng: -70.73228617031253},
		mapTypeControl:false,
		zoomControl:false,
		streetViewControl:false,
	});

	function buscar(){
		if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	addEventListener("load", buscar);

	var latitud,longitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position:{lat:latitud,lng:longitud},
			animation: google.maps.Animation.DROP,
			map:map
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}
	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}
	//Librería gmps. 
	//Para el auto completado de la dirección
	  var inputOrigen =(document.getElementById("origen"));    
	  var autocompleteOrigen = new google.maps.places.Autocomplete(inputOrigen);
	  autocompleteOrigen.bindTo('bounds', map);
	
	var inputDestino = document.getElementById("destino");
	var autocompleteDestino = new google.maps.places.Autocomplete(inputDestino);
	autocompleteDestino.bindTo('bounds', map);

	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true}); 
	directionsDisplay.setMap(map);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById("origen").addEventListener('change', onChangeHandler);
        document.getElementById("destino").addEventListener('change', onChangeHandler);
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById("origen").value,
          destination: document.getElementById("destino").value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
          	document.getElementById("ruta").addEventListener("click", function(){
          		directionsDisplay.setDirections(response);
          	})
            
          } 
        });
 }

/* VALIDACIÓN MODAL */ 

var boton = document.getElementById("btn-enviar").addEventListener("click", function(){
	
	
	
	
		function name(){
			var name = document.getElementById("name").value;
			if(name === ""){
				alert("Please enter your name");
			}
		}
		name();
		function apellido(){
			var apellido = document.getElementById("apellido").value;
			if(apellido === ""){
				alert("Please enter your lastname");
			}
		}
		apellido();

		function email(){
			var correo = document.getElementById("correo").value;
			if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
			  alert("Please enter a valid email");
			}

		}
		email();
		function phone(){
			var phone = document.getElementById("tel").value;
			
			if( !(/^\d{9}$/.test(phone)) ) { //Validación para ingresar 9 numeros
	 			alert("Please enter a valid phone number");
			}
		}
		phone();
})

var botonIniciar = document.getElementById("btn-ingresar").addEventListener("click", function(){
	function username(){
			var username = document.getElementById("usuario").value;
			if(username === ""){
				alert("Please enter your username");
			}
		}
		username();
	function password(){
			var clave = document.getElementById("clave").value;
			if(clave === ""){
				alert("Please enter your password");
			}
		}
		password();
})