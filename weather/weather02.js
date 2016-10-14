// QUANDL API KEY Z4P_heAspH_8fs4u1jf4

$(function() {

	var API_KEY = "f03f7ccd80405068eeb6343b94d744d4";

	// -------------------------------------------------------
	// 					City/Country Weather
	// -------------------------------------------------------
	$("#primary-btn").on("click", function() {

		var resultObj;

	// --------- City and Country Entry ----------
		var city = $("#cityName").val();
		var country = $("#countryName").val();
		url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f03f7ccd80405068eeb6343b94d744d4";
		var base_url = "http://api.openweathermap.org/data/2.5/weather?q="
		var full_url = base_url + city + "," + country + "&units=imperial&appid=" + API_KEY;
		

	// ----------------- Zipcode ----------------- 
		var zipCode = $("#zip").val();
		// url = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=f03f7ccd80405068eeb6343b94d744d4";
		var zbase_url = "http://api.openweathermap.org/data/2.5/weather?zip="
		var zfull_url = zbase_url + zipCode + ",us&units=imperial&appid=" + API_KEY;
		

	// ----------------- JSON INTERPRETATION ----------------- 

				


		$.ajax({
			typ: "GET",
			url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f03f7ccd80405068eeb6343b94d744d4",
			success: function(xhr) {
				resultObj = xhr;
				
				
				

				// tableData to add
				
			},
			error: function() {
				console.log('You made a typo');
			}

			
		});
		// console.log(resultObj);
		
		// var cityName = resultObj.name;
		// var weatherObj = resultObj.weather[0];
		// var mainTempObj =  resultObj.main;
		// var windObj = resultObj.wind;


		// var cityWeather = "<tr><td>" + cityName + "</td><td>" + mainTempObj.temp + "&deg;</td><td>" + mainTempObj.humidity + "&#37;</td><td>" + weatherObj.description + "</td><td>" + windObj.speed + " Mph</td></tr>";
		// $('#theTable').append(cityWeather);

				
				
		
		// ---------- Conditional for City or Zipcode JSON request ---
	
		

		// $("input[type=text]").val("");
	});
	
});