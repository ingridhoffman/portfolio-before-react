// object array for projects
const projects = [
	{
		name: "Karao Kan I ?",
		statement:
			"This collaborative project sought to playfully assist in the impactful decision that most of us at some point will face: 'Do I stand up and sing? Or sit down and drink?'. The application pulls data from two open API sources to provide various artist versions of the song searched by the user, and then offers the album title and image, lyrics, and a play sample for each version of the song.",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/ingridhoffman.github.io_KaraoKanI.png",
		image2: "Assets/placeholder-blue.png",
		contributors: ["Andrew McIntire", "https://github.com/imAnonAmi"],
		link: "https://ingridhoffman.github.io/KaraoKanI/",
	},
	{
		name: "Multiplication Flashcards",
		statement:
			"When I told my kids that I was going back to school to learn web development my son got very excited that I would soon be able to build video games for him. So I created this application for him to practice his multiplication facts. Yes, his response was somewhat underwhelming but it has been a practical solution to a current challenge. Next up, robots verus zombies (because I did promise).",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/ingridhoffman.github.io_Multiplication-Flashcards_.png",
		image2: "Assets/placeholder-blue.png",
		link: "https://ingridhoffman.github.io/Multiplication-Flashcards/",
	},
	// {
	// 	name: "Weather Dashboard",
	// 	statement:
	// 		"This server-side API project challenged 'build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
	// 	ideas: "Key ideas, concepts, and/or priorities",
	// 	strategy: "Development strategy",
	// 	image1: "Assets/ingridhoffman.github.io_WeatherDashboard_.png",
	// 	image2: "Assets/placeholder-blue.png",
	// 	link: "https://ingridhoffman.github.io/WeatherDashboard/",
	// },
	{
		name: "Eat De Burger",
		statement:
			"Fun web interface that allows users to imagine and (virtually) devour their own uniquely tasty hamburgers. This Node based app follows MVC design pattern and utilizes MySQL, Express, and Handlebars.",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/EatDeBurger.png",
		image2: "Assets/placeholder-blue.png",
		link: "https://dashboard.heroku.com/apps/eat-de-burger",
	},
	{
		name: "Aerial Performance",
		statement:
			"Is my previous life as an aerial performer, choreographer, and instructor directly relevant to my current work as a developer? Perhaps not, but the experiences, collaboration, and travel of that time have certainly colored my life perspective and influenced my drive for innovation and creativity.",
		ideas: "Key ideas, concepts, and/or priorities",
		strategy: "Development strategy",
		image1: "Assets/Picture 019.jpeg",
		image2: "Assets/placeholder-blue.png",
		link: "",
	},
];

// when document is ready
$(document).ready(function () {
	// populate project grid with project cards
	projects.forEach(function (object, index) {
		let cardDiv = `<div class="projectCard" id="${index}"></div>`;
		let cardImage = `<img src="${object.image1}" alt="image of ${object.name}" />`;
		let cardName = `<h3 class="cardName invisible">${object.name}</h3>`;
		$("#portfolio").append(cardDiv);
		$("#" + index).append(cardImage);
		$("#" + index).append(cardName);
	});

	// event listener for mouse over projects
	$(".projectCard").hover(
		// show card name on mouse enter
		function () {
			$(this).children(".cardName").removeClass("invisible");
			$(this).children("img").addClass("invisible");
		},
		// show image on mouse exit
		function () {
			$(this).children(".cardName").addClass("invisible");
			$(this).children("img").removeClass("invisible");
		}
	);

	// event listener for click to select project
	$(".projectCard").on("click", function (event) {
		// show select project image
		let selected = projects[event.target.id];
		let projectImage = `<img src="${selected.image1}" alt="image of ${selected.name}" />`;
		$("#selectProjectImage").html(projectImage);
		$("#selectProjectImage").removeClass("invisible");
		// show select project info
		let projectInfo = `<h2>${selected.name}</h2><p>${selected.statement}</p>`;
		$("#selectProjectInfo").html(projectInfo);
		// show link button if url exists
		if (selected.link !== "") {
			let projectButton = `<div class="right"><a href="${selected.link}" rel="external" target="_blank" class="button">view project</a></div>`;
			$("#selectProjectInfo").append(projectButton);
		}
	});
});
