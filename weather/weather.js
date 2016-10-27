$(function() {

	//forcast date
	var weatherDate = new Date(1477479600 * 1000);
	console.log(weatherDate);
	var nextTime = new Date(1477566000 * 1000);
	console.log(nextTime);
	var API_KEY = "f03f7ccd80405068eeb6343b94d744d4";

	var url5Day = http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=imperial&cnt=3&appid=f03f7ccd80405068eeb6343b94d744d4
	var urlzip5Day = http://api.openweathermap.org/data/2.5/forecast/daily?zip=22204,us&units=imperial&cnt=3&appid=f03f7ccd80405068eeb6343b94d744d4

	// -------------------------------------------------------
	// 					City/Country Weather
	// -------------------------------------------------------
	$("#primary-btn").on("click", function() {

		var resultObj;

	// --------- City and Country Entry ----------
		var city = $("#cityName").val();
		var country = $("#countryName").val();
		// url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f03f7ccd80405068eeb6343b94d744d4";
		var base_url = "http://api.openweathermap.org/data/2.5/weather?q="
		var full_url = base_url + city + "," + country + "&units=imperial&appid=" + API_KEY;


	// ----------------- Zipcode ----------------- 
		var zipCode = $("#zip").val();
		// url = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=f03f7ccd80405068eeb6343b94d744d4";
		var zbase_url = "http://api.openweathermap.org/data/2.5/weather?zip="
		var zfull_url = zbase_url + zipCode + ",us&units=imperial&appid=" + API_KEY;
		console.log(zfull_url);

	// ----------------- JSON INTERPRETATION ----------------- 
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
		
			try {
				if(xhr.status == 200) {
					var result = xhr.responseText;
					resultObj = JSON.parse(result);
					// ---- Object and property pulls for referennce
						var cityName = resultObj.name;
						var weatherObj = resultObj.weather[0];
						var mainTempObj =  resultObj.main;
						var windObj = resultObj.wind;

						// tableData to add
						var cityWeather = "<tr><td><p>" + cityName + "</p></td><td><p>" + mainTempObj.temp + "&deg;</p></td><td><p>" + mainTempObj.humidity + "&#37;</p></td><td id=\"icon\"><img src=\"http://openweathermap.org/img/w/" + weatherObj.icon + ".png\"></td><td><p>" + windObj.speed + " Mph</p></td></tr>";
						$('#theTable').append(cityWeather);
				
				} else {
					throw new Error('The object variables are mis-defined');
				}
			} catch(e) {
				console.log('test ' + e.name + ' test ' + e.message);
			}
		};




		// ---------- Conditional for City or Zipcode JSON request ---
		if($("#cityName").val()) {
		

			xhr.open('GET', full_url, true);
			xhr.send(null);

		
		} else {

			xhr.open('GET', zfull_url, true);
			xhr.send(null);
		}

		$("input[type=text]").val("");
	});

	// -------------------------------------------------------
	// 					ZipCode Us weather
	// -------------------------------------------------------

	// $("#zip-btn").on("click", function() {
	// 	var zipCode = $("#zip").val();
	// 	// url = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=f03f7ccd80405068eeb6343b94d744d4";
	// 	var zbase_url = "http://api.openweathermap.org/data/2.5/weather?zip="
	// 	var zfull_url = zbase_url + zipCode + ",us&units=imperial&appid=" + API_KEY;
	// 	var resultObj;

	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onload = function() {
	// 		if(xhr.status == 200) {
	// 			var result = xhr.responseText;
	// 			resultObj = JSON.parse(result);
	// 			// ---- Object and property pulls for referennce
	// 				var cityName = resultObj.name;
	// 				var weatherObj = resultObj.weather[0];
	// 				var mainTempObj =  resultObj.main;
	// 				var windObj = resultObj.wind;

	// 				// tableData to add
	// 				var cityWeather = "<tr><td>" + cityName + "</td><td>" + mainTempObj.temp + "&deg;</td><td>" + mainTempObj.humidity + "&#37;</td><td>" + weatherObj.description + "</td><td>" + windObj.speed + " Mph</td></tr>";
	// 				$('#theTable').append(cityWeather);

				
				
	// 		}
	// 	};
		
	// 	xhr.open('GET', zfull_url, true);
	// 	xhr.send(null);

	// })
	



});