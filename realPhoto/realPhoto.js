$(function() {

var picObject;
// Getting JSON

	$.getJSON('imagesInfo.json')
		.done(function(data) {
			picArray = data.images;
			
			for (var i = 0; i < picArray.length; i++) {
				picArray[i]
				$('#thumbnails').append('<a href="' + picArray[i].imageSource + '" class="thumb" title="' + picArray[i].name + '"><img src="' + picArray[i].imageSource + '" width="60" height="38" alt="' + picArray[i].name + '"></a>');
			}
		});

	

// book exercise
	var request;
	var $current;
	var cache = {};
	var $frame = $('#photo-viewer');
	var $thumbs = $('.thumb');

	function crossfade($img) {

		if ($current) {
			$current.stop().fadeOut('slow');
		}

		$img.css({
			marginLeft: -$img.width() / 2, 
			marginTop: -$img.height() /2
		});

		$img.stop().fadeTo('slow', 1);

		$current = $img;
	}


$(document).on('click', '.thumb', function(e) {

	var $img;
	var src = this.href;
	request = src;

	e.preventDefault();

	$thumbs.removeClass('active');
	$(this).addClass('active');

	if (cache.hasOwnProperty(src)) {
		if(cache[src].isLoading === false) {
			crossfade(cache[src].$img);
		}
	} else {
		$img = $('<img/>');
		cache[src] = {
			$img: $img,
			isLoading: true
		};

		$img.on('load', function() {
			$img.hide();
			$frame.removeClass('is-loading').append($img);
			cache[src].isLoading = false;

			if (request === src) {
				crossfade($img);
			}
		});

		$frame.addClass('is-loading');

		$img.attr({
			'src': src,
			'alt': this.title || ''
		});
	}
});
	$('.thumb').eq(0).click();

}); // END OF READY FUNCTION 