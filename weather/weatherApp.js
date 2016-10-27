$(function() {
//forcast date
	var weatherDate = new Date(1477479600 * 1000);

	var nextTime = new Date(1477566000 * 1000);
	
	var API_KEY = "f03f7ccd80405068eeb6343b94d744d4";
	var panNum = 0;

	// -------------------------------------------------------
	// 					City/Country Weather
	// -------------------------------------------------------

	$("#primary-btn").on("click", function() {
		// removing modal attribute
		$('#primary-btn').removeAttr('data-toggle', 'modal');

		var resultObj;
		var urlRequest;


		// --------- City and Country Entry ----------
		// 
		
		var city = $("#cityName").val();
		city = city.replace(/\s/g,'');
		city = city.replace(/\s/g,'');
		console.log(city);
	
		var base_url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
		var full_url = base_url + city+ "&units=imperial&cnt=6&appid=" + API_KEY;
		
		// ----------------- Zipcode -----------------
		// /\d{5}/.test(zipCode);
		var zipCode = $("#zip").val();
		// if(zipCode.length < 5) {
		// 	return alert('Zipcode must be 5 numbers long');
		// }
		
		var zbase_url = "http://api.openweathermap.org/data/2.5/forecast/daily?zip="
		var zfull_url = zbase_url + zipCode + ",us&units=imperial&cnt=6&appid=" + API_KEY;
	
		// ----------------- WHICH HAS VALUE BECOMES URLREQUEST ----------------- 

		if ($("#cityName").val()) {
			if(/^[a-zA-Z]+$/.test(city)) {
				urlRequest = full_url;
			} else {
				$("#cityName").val('');
				$('.modal-title').html('<h1>ATTENTION</h1>');
				$('.modal-body').html('<h3>You have entered the information for City Incorrectly. Please check your entry.</h3>');
				$("#cityName").val('');
				return $('#primary-btn').attr('data-toggle', 'modal');

			}
			
		} else if ($("#zip").val()) {
			if (/\d{5}/.test(zipCode)) {
				urlRequest = zfull_url;
			} else {
				$("#zip").val('');
				$('.modal-title').html('<h1>ATTENTION</h1>');
				$('.modal-body').html('<h3>You have entered the information for Zipcode Incorrectly. Please check your entry.</h3>');
				return $('#primary-btn').attr('data-toggle', 'modal');
			}
			
		} else {

			$('.modal-title').html('<h1>ATTENTION</h1>');
			$('.modal-body').html('<h3>You have not entered the required information for City or Zipcode. Please check your entry.</h3>');
			return $('#primary-btn').attr('data-toggle', 'modal');

		}

		// ----------------- JSON INTERPRETATION ----------------- 

		$.ajax({
			typ: "GET",
			url: urlRequest,
			success: function(data) {

				resultObj = data;
				
				var cityName = resultObj.city.name;

				

				$('#panels').prepend('<div class="panel-group"><div class="panel panel-default text-center"><div class="panel-heading"><h2>' + cityName + '</h2></div><div class="panel-body" id="panelContent' + panNum+ '"></div></div></div>');


				// var dayOneDate = new Date(resultObj.dt * 1000)
				console.log();



				for (var i = 0; i < resultObj.list.length; i++) {
					forecast = resultObj.list[i];

					var forecastDate = (new Date(forecast.dt * 1000).toDateString());
					var forecastTemp = Math.round(forecast.temp.day);
					var forecastHigh = Math.round(forecast.temp.max);
					var forecastLow = Math.round(forecast.temp.min);
					var forecastDescript = forecast.weather[0].description.toUpperCase();
					var forecastIcon = forecast.weather[0].icon;



					$('#panelContent' + panNum).append('<div class="panel panel-default col-md-2"><div class="panel-heading">' + forecastDate + '</div><div class="panel-body text-center"><img src=\"http://openweathermap.org/img/w/' + forecastIcon + '.png\"><p>' + forecastDescript + '</p><h1>' + forecastTemp + '&#8457;</h1><p>Day High: ' + forecastHigh + '&#8457;</p><p>Day High: ' + forecastLow + '&#8457;</p></div></div>');

					
				}
				panNum++;


	

				// tableData to add
				// var locWeather = "<tr><td><p>" + cityName + "</p></td><td><p>" + mainTempObj.temp + "&deg;</p></td><td><p>" + mainTempObj.humidity + "&#37;</p></td><td id=\"icon\"><img src=\"http://openweathermap.org/img/w/" + weatherObj.icon + ".png\"></td><td><p>" + windObj.speed + " Mph</p></td></tr>";
				// $('#theTable').append(cityWeather);
					
						
					

					
					
			},
			error: function() {
				$('.modal-title').html('<h1>ATTENTION</h1>');
				$('.modal-body').html('<h3>The API REQUEST FAILED PLEASE TRY AGAIN</h3>');
				return $('#primary-btn').attr('data-toggle', 'modal');
			}
			
		});
		//clearing search values
		$("#cityName").val('');

		$("#zip").val('');

	});


});