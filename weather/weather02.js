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
		 zurl = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=f03f7ccd80405068eeb6343b94d744d4";
		var zbase_url = "http://api.openweathermap.org/data/2.5/weather?zip="
		var zfull_url = zbase_url + zipCode + ",us&units=imperial&appid=" + API_KEY;
		

	// ----------------- JSON INTERPRETATION ----------------- 
	var resultObj;		


		$.ajax({
			typ: "GET",
			url: "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=f03f7ccd80405068eeb6343b94d744d4",
			success: function(data) {


					resultObj = data;
					console.log(resultObj);

					try {
						if(resultObj) {

							
								var cityName = resultObj.name;
								var weatherObj = resultObj.weather[40];
								var mainTempObj =  resultObj.main;
								var windObj = resultObj.wind;
								// tableData to add
								var cityWeather = "<tr><td><p>" + cityName + "</p></td><td><p>" + mainTempObj.temp + "&deg;</p></td><td><p>" + mainTempObj.humidity + "&#37;</p></td><td id=\"icon\"><img src=\"http://openweathermap.org/img/w/" + weatherObj.icon + ".png\"></td><td><p>" + windObj.speed + " Mph</p></td></tr>";
								$('#theTable').append(cityWeather);
						} else {
							throw new Error('The object variables are miss defines')
						}
					} catch(e) {
							var errorMessage = ' test' + e.name + ' test' + e.message;
							console.log(errorMessage);
						}
					

					// ---- Object and property pulls for referennce
					
			}
			
		});
		
				
		
		// ---------- Conditional for City or Zipcode JSON request ---
	
		

		// $("input[type=text]").val("");
	});
	
});