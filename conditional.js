<script>
jQuery( document ).ready(function($) {

	// hide section
	$('.activities').hide();
	$('.relaxing').hide();
	$('.getaway').hide();
	$('.vacation').hide();

	$('.step-activities').hide();
	$('.step-relaxing').hide();
	$('.step-getaway').hide();
	$('.step-vacation').hide();

		// input triggers
		$('.active').click(function() {
			console.log("showing active");

			var value=this.value;
			
			if (value == 'vaca1') {
				$('.activities').show();
				$('.step-activities').show();

				$('.relaxing').hide();
				$('.getaway').hide();
				$('.vacation').hide();

				$('.step-relaxing').hide();
				$('.step-getaway').hide();
				$('.step-vacation').hide();
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
				$('.step-relaxing').show();

				$('.activities').hide();
				$('.getaway').hide();
				$('.vacation').hide();

				$('.step-activities').hide();
				$('.step-getaway').hide();
				$('.step-vacation').hide();
			} else {
				console.log("nope");
			}

			return false;
		});

		$('.couples').click(function() {
			console.log('showing getaway')
			var value=this.value;

			if (value == 'vaca3') {
				$('.getaway').show();
				$('.step-getaway').show();

				$('.relaxing').hide();
				$('.activities').hide();
				$('.vacation').hide();

				$('.step-activities').hide();
				$('.step-relaxing').hide();
				$('.step-vacation').hide();
			} else {
				console.log("nope");
			}

			return false;
		});

		$('.family').click(function() {
			console.log('showing vaction')
			var value=this.value;

			if (value == 'vaca4') {
				$('.vacation').show();
				$('.step-vacation').show();

				$('.getaway').hide();
				$('.relaxing').hide();
				$('.activities').hide();

				$('.step-activities').hide();
				$('.step-relaxing').hide();
				$('.step-getaway').hide();
			} else {
				console.log("nope");
			}

			return false;
		});
});
</script>

