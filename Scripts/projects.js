const projects = [
	{
		name: "Project",
		statement: "A bit about the project",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/placeholder-blue.png",
		image2: "Assets/placeholder-blue.png",
		link: "#"
	},
	{
		name: "Project",
		statement: "A bit about the project",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/placeholder-blue.png",
		image2: "Assets/placeholder-blue.png",
		link: "#"
	},
	{
		name: "Project",
		statement: "A bit about the project",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/placeholder-blue.png",
		image2: "Assets/placeholder-blue.png",
		link: "#"
	},
	{
		name: "Project",
		statement: "A bit about the project",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/placeholder-blue.png",
		image2: "Assets/placeholder-blue.png",
		link: "#"
	}
];

// when document is ready
$(document).ready(function() {
	// populate project grid with project cards
	projects.forEach(function(object, index) {
		console.log(object);
		console.log(index);
		let cardDiv = `<div class="projectCard" id="${index}"></div>`;
		let cardImage = `<img src="${object.image1}" alt="image of ${object.name}" />`;
		let cardName = `<h3 class="cardName invisible">${object.name}</h3>`;
		$("#portfolio").append(cardDiv);
		$("#" + index).append(cardImage);
		$("#" + index).append(cardName);
	});

	// event listener for mouse over projects
	$(".projectCard").hover(
		function() {
			$(this)
				.children(".cardName")
				.removeClass("invisible");
			$(this)
				.children("img")
				.addClass("invisible");
		},
		function() {
			$(this)
				.children(".cardName")
				.addClass("invisible");
			$(this)
				.children("img")
				.removeClass("invisible");
		}
	);

	// event listener for click on projects
	$(".projectCard").on("click", function(event) {
		// show select project image
		let selected = projects[event.target.id];
		let projectImage = `<img src="${selected.image1}" alt="image of ${selected.name}" />`;
		$("#selectProjectImage").html(projectImage);
		$("#selectProjectImage").removeClass("invisible");
		// show select project info
		let projectInfo = `<h2>${selected.name}</h2><p>${selected.statement}</p>`;
		let projectButton = `<div class="right"><a href="${selected.link}" rel="external" target="_blank" class="button">view project</a></div>`;
		$("#selectProjectInfo").html(projectInfo);
		$("#selectProjectInfo").append(projectButton);
	});
});
