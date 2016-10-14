$(function() {


	$("#primary-btn").on("click", function() {

		var resultObj
		var apiKey = "Z4P_heAspH_8fs4u1jf4";
		var dataType = ".json?api_key=";
		var ticker =  $("#stock").val();
		

		var baseURL = "https://www.quandl.com/api/v3/datasets/WIKI/";
		var singleTickerURL = baseURL + ticker + dataType + apiKey;
		
		$.ajax({
			url: singleTickerURL, 
			success: function(data){
        	resultObj = data.dataset;
        	// Company Name
        	var companyCut = resultObj.name.split(' ');
        	var companyName = companyCut[0];
        	
        	// Column Data
        	var latestData = resultObj.data[0];

        	var stockStats = "<tr><td>" + companyName + "</td><td>" + latestData[0] + "</td><td>$" + latestData[1] + "</td><td>$" + latestData[2]+ "</td><td>$" + latestData[3] + "</td><td>$" + latestData[4] + "</td></tr>";
			$('#theTable').append(stockStats);


    }});


	});



	
	


}); // --------------------- END OF READY FUNCTION --------------------