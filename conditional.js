$( document ).ready(function() {

	$('.activities').hide();
	$('relaxing').hide();

		$('.active').click(function() {
			console.log("showing active");

			var value=this.value;
			
			if (value == 'vaca1') {
				$('.activities').show();
			} else {
				console.log("sorry");
			}

			return false;

		});


		$('.relax').click(function() {
			console.log('showing relaxing')
			var value=this.value;

			if (value == 'vaca2') {
				$('.relaxing').show();
			} else {
				console.log("nope");
			}

			return false;

		});
	
});





if (value == 'vaca2') {
			$('.relaxing').show();
		} else {}