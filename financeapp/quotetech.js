$(function() {


	$("#primary-btn").on("click", function() {

		var resultObj
		var apiKey = "Z4P_heAspH_8fs4u1jf4";
		var dataType = ".json?api_key=";
		var ticker =  $("#stock").val();
		

		var baseURL = "https://www.quandl.com/api/v3/datasets/WIKI/";
		var singleTickerURL = baseURL + ticker + dataType + apiKey;
		var bad_url = baseURL + ticker + dataType + 'Z4P_heAspH_ ';

			var xhr = new XMLHttpRequest();
			xhr.onload = function() {
			
				try {
					if(xhr.status == 200) {
						var result = xhr.responseText;
						parseObj = JSON.parse(result);
						var resultObj = parseObj.dataset;
						console.log(resultObj.name);
						//---- Object and property pulls for referennce
						    var companyCut = resultObj.name.split(' ');
				        	var companyName = companyCut[0];
				        	
				        	// Column Data
				        	var latestData = resultObj.data[0];

				        	//FOR LOOP FOR EACH LINE OF TABLE DATA
				        	var i = $('table tr').length;

				        	var stockStats = "<tr><td>" + companyName + "</td><td>" + latestData[0] + "</td><td id=\"open_" + [i] + "\">$" + latestData[1] + "</td><td id=\"high_" + [i] + "\">$" + latestData[2]+ "</td><td id=\"low_" + [i] + "\">$" + latestData[3] + "</td><td id=\"close_" + [i] + "\">$" + latestData[4] + "</td></tr>";
							$('#theTable').append(stockStats);
							

							// DAY HIGH CONDITIONAL
							if(latestData[2] > latestData[1]) {
								$('#high_' + [i]).css('color', 'green').append('<span class="glyphicon glyphicon-arrow-up"></span>');
							} else {
								$('#high_' + [i]).css('color', 'red').append('<span class="glyphicon glyphicon-arrow-down"></span>');

							}
							// DAY LOW CONDITIONAL
							if(latestData[3] > latestData[1]) {
								$('#low_' + [i]).css('color', 'green').append('<span class="glyphicon glyphicon-arrow-up"></span>');
							} else {
								$('#low_' + [i]).css('color', 'red').append('<span class="glyphicon glyphicon-arrow-down"></span>');

							}
							// DAY CLOSE CONDITIONAL
							if(latestData[4] > latestData[1]) {
								$('#close_' + [i]).css('color', 'green').append('<span class="glyphicon glyphicon-arrow-up"></span>');
							} else {
								$('#close_' + [i]).css('color', 'red').append('<span class="glyphicon glyphicon-arrow-down"></span>');

							}
					
					} else {
						throw new Error('The object variables are miss defines');
					}
				} catch(e) {
					console.log('test ' + e.name + ' test ' + e.message);
				}
			};




			// ---------- Conditional for City or Zipcode JSON request ---
			xhr.open('GET', singleTickerURL, true);
			xhr.send(null);

			
			
		});
		
		// $.ajax({
		// 	url: singleTickerURL, 
		// 	success: function(data){
	 //        	resultObj = data.dataset;
	 //        	// Company Name
	 //        	var companyCut = resultObj.name.split(' ');
	 //        	var companyName = companyCut[0];
	        	
	 //        	// Column Data
	 //        	var latestData = resultObj.data[0];

	 //        	//FOR LOOP FOR EACH LINE OF TABLE DATA
	 //        	var i = $('table tr').length;

	 //        	var stockStats = "<tr><td>" + companyName + "</td><td>" + latestData[0] + "</td><td id=\"open_" + [i] + "\">$" + latestData[1] + "</td><td id=\"high_" + [i] + "\">$" + latestData[2]+ "</td><td id=\"low_" + [i] + "\">$" + latestData[3] + "</td><td id=\"close_" + [i] + "\">$" + latestData[4] + "</td></tr>";
		// 		$('#theTable').append(stockStats);
				

		// 		// DAY HIGH CONDITIONAL
		// 		if(latestData[2] > latestData[1]) {
		// 			$('#high_' + [i]).css('color', 'green').append('<span class="glyphicon glyphicon-arrow-up"></span>');
		// 		} else {
		// 			$('#high_' + [i]).css('color', 'red').append('<span class="glyphicon glyphicon-arrow-down"></span>');

		// 		}
		// 		// DAY LOW CONDITIONAL
		// 		if(latestData[3] > latestData[1]) {
		// 			$('#low_' + [i]).css('color', 'green').append('<span class="glyphicon glyphicon-arrow-up"></span>');
		// 		} else {
		// 			$('#low_' + [i]).css('color', 'red').append('<span class="glyphicon glyphicon-arrow-down"></span>');

		// 		}
		// 		// DAY CLOSE CONDITIONAL
		// 		if(latestData[4] > latestData[1]) {
		// 			$('#close_' + [i]).css('color', 'green').append('<span class="glyphicon glyphicon-arrow-up"></span>');
		// 		} else {
		// 			$('#close_' + [i]).css('color', 'red').append('<span class="glyphicon glyphicon-arrow-down"></span>');

		// 		}
	      
  //   		}
  //   	});
	// });

}); // --------------------- END OF READY FUNCTION --------------------