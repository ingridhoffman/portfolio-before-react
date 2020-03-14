// when document is ready
$(document).ready(function() {
	// event listener for contact
	$("#contactLink").on("click", function(event) {
		// diplay popup contact form
		$("#myContact").show();
		// set form for use or reset if previously submitted
		$("#contact").show();
		$("#name").val("");
		$("#company").val("");
		$("#topic").val("");
		$("#email").val("");
		$("#thanks").hide();
		// put focus in first input box
		$("#name").focus();
	});

	// event listener for click to close contact window
	$("#close").on("click", function(event) {
		console.log("clicked");
		// hide popup contact form
		$("#myContact").hide();
	});

	// event listener for send contact form
	$("#send").on("click", function(event) {
		// prevent default
		event.preventDefault();
		// verify user input
		console.log($("#name").val());
		if ($("#name").val() === "" || $("#company").val() === "" || $("#topic").val() === "" || $("#email").val() === "") {
			alert("Please complete all fields.");
		} else {
			// send contact form - NOT YET FUNCTIONAL
			console.log("sent");
			// show success message
			$("#contact").hide();
			$("#thanks").show();
		}
	});
});
