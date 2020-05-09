// when document is ready
$(document).ready(function () {
	// event listener for send contact form
	$("#send").on("click", function (event) {
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
