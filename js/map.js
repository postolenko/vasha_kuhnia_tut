
	var map;

	var marker;
	var image = 'img/map_marker.png';

	var styles;

	function initMap() {

		var styles =  [];


		var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		map = new google.maps.Map(document.getElementById('map_1'), {
			center: {lat: 55.7497282, lng: 37.5346446},
			// 59.9711252,30.2972661
			scrollwheel: false,
			scaleControl: false,
			zoom: 16
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.7497282, lng: 37.5346446},
			// map: map,
			icon: image,
			title: 'Ваша Кухня тут'
		});

		marker.addListener('click', toggleBounce);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');


	}

		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}
