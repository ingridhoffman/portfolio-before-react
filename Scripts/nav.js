// when document is ready
$(document).ready(function () {
	// scroll to top when page is refreshed
	$(this).scrollTop(0);

	// highlight active section on scroll
	$(window).scroll(function () {
		var position = $(this).scrollTop();

		$("article").each(function () {
			var target = $(this).offset().top - 300;
			var id = $(this).attr("id");

			if (position >= target) {
				// remove active class from other nav links
				$("nav li a").removeClass("pop");
				// activate currect section nav link
				$(`[href="#${id}"]`).addClass("pop");
				// document.querySelector(`[href="#${id}"]`).classList.add("pop");
			}
		});

		// event listener to slide sidebar in & out in mobile view
	});
});
