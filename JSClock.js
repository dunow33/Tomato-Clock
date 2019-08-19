$(document).ready(function() {
	var counter;
	var startBreak;
	var workTime = parseInt($("#time25").html());
	var breakTime = parseInt($("#time5").html());
	var countdown = parseInt($("#countTime").html());
	var countdownBrake = parseInt($("countTime").html());

	$("#startBtn").click(function() {
		$("#startBtn").hide();
		$("#resetBtn").html("Stop");

		counter = setInterval(timer, 1000);
		countdown = workTime *= 60;

		function timer() {
			countdown -= 1;

			if(countdown === 0) {
				clearInterval(counter);
				startBreak = setInterval(breakTimer, 1000);
				countdownBrake = breakTime *= 60;
			}
			if(countdown % 60 >= 10) {
				$('#countTime').html(Math.floor(countdown / 60) + ":" + countdown % 60);
			} else {
				$('#countTime').html(Math.floor(countdown / 60) + ":0" + countdown % 60);
			}

			function breakTimer() {
				$("#sessionTime").html("Break Time:");
				countdownBrake -= 1;
				if(countdownBrake === 0) {
					clearInterval(startBreak);
					$("#sessionTime").html("Time is up!! <br />Start new session!!");
					$("#resetBtn").html("Reset");
				}
				if(countdownBrake % 60 >= 10) {
					$('#countTime').html(Math.floor(countdown / 60) + ":" + countdown % 60);
				} else {
					$('#countTime').html(Math.floor(countdown / 60) + ":0" + countdown % 60);
				}
			}
		}
	});

	$("#resetBtn").click(function() {
		workTime = 25;
		breakTime = 5;
		clearInterval(counter);
		$('#countTime').html(workTime);
	});
});
