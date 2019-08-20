$(document).ready(function() {
	var counter;
	var startBreak;
	var workTime = parseInt($("#work").html());
	var breakTime = parseInt($("#break").html());
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

	$("#workMinus").click(function() {
	if(workTime > 1) {
		workTime -= 1;
		$("#work").html(workTime);
		$("#countTime").html(workTime);
	} else {
		alert("You can't go lower than 1 minute!! Try again!!");
	}
	});

	$("#workPlus").click(function() {
	if(workTime < 60) {
		workTime += 1;
		$("#work").html(workTime);
		$("#countTime").html(workTime);
	} else {
		alert("You can't go higher than 1 hour!! Try again!!");
	}
	});

	$("#breakMinus").click(function() {
	if(breakTime > 1) {
		breakTime -= 1;
		$("#break").html(breakTime);
	} else {
		alert("You can't go lower than a 1 minute break!! Try again!!");
	}
	});

	$("#breakPlus").click(function() {
	if(breakTime < 15) {
		breakTime += 1;
		$("#break").html(breakTime);
	} else {
		alert("You can't go higher than a 15 minute break!! Try again!!");
	}
	});

	$("#resetBtn").click(function() {
		workTime = 25;
		breakTime = 5;
		clearInterval(counter);
		$('#countTime').html(workTime);
	});
});
