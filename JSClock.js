$(document).ready(function() {
	var counter;
	var startBreak;
	var workTime = parseInt($("#time25").html());
	var breakTime = parseInt($("#time5").html());
	var countdown = parseInt($("#countTime").html());

	$("#startBtn").click(function() {
		$("#startBtn").hide();
		$("#resetBtn").html("Stop");

		counter = setInterval(timer, 1000);
		countdown = workTime *= 60;

		function timer() {
			countdown -= 1;
		
			if(countdown % 60 >= 10) {
				$('#countTime').html(Math.floor(countdown / 60) + ":" + countdown % 60);
			} else {
				$('#countTime').html(Math.floor(countdown / 60) + ":0" + countdown % 60);
			}
		}
	});
});
