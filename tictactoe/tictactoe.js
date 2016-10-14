$(function() {
	
// 1.The first player will always play a Cross=X
// 2.The second player therefore will be a 0
// 3.The tow players will be playerX and playerY
// 4.There are 8 cases to win.
// 5.How to check if playerx or playerY wins
// 6.If XXX is winner --> The playerX else playerY
// 7.We will use an array 

// -----------------------------------------------------
//                    MY CODE
// -----------------------------------------------------

var blank = '<img src="images/tictactoe_grey_blank.png>"';
var knot = '<img src="images/tictactoe_knots.png">';
var cross = '<img src="images/tictactoe_grey_cross.png">';
var elmsg = $('#message');
var msg = '';
elmsg.html(msg);

var gameStat = {

		turnCount: 0,
		currentP: 'PlayerX',
		marker: cross
	};

$('td').each(function() {

	$(this).on('click', function() {
		
		if((gameStat.turnCount == 0) || (gameStat.turnCount % 2 == 0)) {
			$(this).html('<img src="images/tictactoe_grey_cross.png">');

			gameStat.marker = cross;
			gameStat.currentP = 'PlayerX';
			gameStat.turnCount ++;

		} else {
			$(this).html('<img src="images/tictactoe_knots.png">');

			gameStat.marker = knot;
			gameStat.currentP = 'PlayerY';
			gameStat.turnCount ++;
		}

		switch (true) {

			case (($('#00').html() == gameStat.marker) && ($('#01').html() == gameStat.marker) && ($('#02').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#10').html() == gameStat.marker) && ($('#11').html() == gameStat.marker) && ($('#12').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#20').html() == gameStat.marker) && ($('#21').html() == gameStat.marker) && ($('#32').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#00').html() == gameStat.marker) && ($('#10').html() == gameStat.marker) && ($('#20').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#01').html() == gameStat.marker) && ($('#11').html() == gameStat.marker) && ($('#21').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#02').html() == gameStat.marker) && ($('#12').html() == gameStat.marker) && ($('#22').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#00').html() == gameStat.marker) && ($('#11').html() == gameStat.marker) && ($('#22').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (($('#20').html() == gameStat.marker) && ($('#11').html() == gameStat.marker) && ($('#02').html() == gameStat.marker)):
				elmsg.html(gameStat.currentP + ' is the Winner!');
				break;
			case (gameStat.turnCount > 8):
				elmsg.html('No more chances to win! ');
				break;
		}

		
	});
});




// -----------------------------------------------------
//                    RHADIKA'S CODE 
// -----------------------------------------------------

// var blank = '<img src="images/tictactoe_grey_blank.png>"';
// var knot = '<img src="images/tictactoe_knots.png">';
// var cross = '<img src="images/tictactoe_grey_cross.png">';

// var plays = [];
// var playerX = "X";
// var playerY = "O";
// var counter = 0;

// function playGame(row, col) {
// 	if (plays.length == 9) {
// 		alert('Sorry! Game Over!');
// 		return;
// 	}

// 	var id = "#" + row + col;
// 		var td_el = $(id); 

// 	if (plays.length == 0) {
// 		plays[counter] = playerX;
// 		td_el.html(cross)
// 	}
// 	// This is the the second player
// 	 else if(plays.length % 2 != 0 ){
// 		plays[counter] = playerY;
// 		td_el.html(knot);

// 	} else {
// 		plays[counter] = playerX;
// 		td_el.html(cross);
// 	}

// 	counter ++
// 	var win = check_for_winner();
// 	if(win == true) {
// 		console.log('GAME OVER')
// 	} else {
// 		console.log('Play ON')
// 	}
// }

// function check_for_winner() {

// 	var status  = false;
// 	var sq1 = $('#00');
// 	var sq2 = $('#01');
// 	var sq3 = $('#02');
// 	var sq4 = $('#10');
// 	var sq5 = $('#11');
// 	var sq6 = $('#12');
// 	var sq7 = $('#20');
// 	var sq8 = $('#21');
// 	var sq9 = $('#22');


	
// 	// status = (sq1.html() == sq2.html()) && (sq2.html() == sq3.html());
// 	status = (sq4.html() == sq5.html()) && (sq5.html() == sq6.html());
// 	// status = (sq7.html() == sq8.html()) && (sq8.html() == sq9.html());

// 	console.log(status);
	


// 	return status;

// }

}); // ----- END OF DOC READY -----