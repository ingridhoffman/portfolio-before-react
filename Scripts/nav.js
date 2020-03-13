// when document is ready
$(document).ready(function() {
	// scroll observer to animate navigation for active section
	// adapted from https://www.hweaver.com/intersection-observer-single-page-navigation/
	// and https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/
	let observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach(entry => {
				// remove old active class
				document.querySelector(".pop").classList.remove("pop");
				// get id of current article
				const id = entry.target.id;
				// activate currect section nav link
				document.querySelector(`[href="#${id}"]`).classList.add("pop");
			});
		},
		// set active range when section fills 70% fo screen
		// set top border to arbitrary high number out of range of content so it doesn't trigger
		{ rootMargin: "800% 0% -70% 0%" }
	);

	document.querySelectorAll("article").forEach(article => {
		observer.observe(article);
	});
});
