// object array for projects
const projects = [
	{
		name: "Karao Kan I ?",
		statement:
			"This collaborative project sought to playfully assist in the impactful decision that most of us at some point will face: 'Do I stand up and sing? Or sit down and drink?'. The application pulls data from two open API sources to provide various artist versions of the song searched by the user, and then offers the album title and image, lyrics, and a play sample for each version of the song.",
		image1: "Assets/projects/ingridhoffman.github.io_KaraoKanI.png",
		github: "https://github.com/ingridhoffman/KaraoKanI",
		link: "https://ingridhoffman.github.io/KaraoKanI/",
	},
	{
		name: "Moodle",
		statement:
			"During this time of 'staying home, staying healthy' many of us feel disconnected from ourselves as well as each other. Moodle seeks to help reconnect our emotional states via a simple and intuitive application to help people track their day-to-day emotions. Tracking is aided by icons and sliders based on basic emotional states and intensities, and history is easily reviewed in a journal format as well as a visual mood cloud.",
		image1: "Assets/projects/the-moodle-app.herokuapp.com_moods-view.png",
		github: "https://github.com/ingridhoffman/Moodle",
		link: "https://the-moodle-app.herokuapp.com/",
	},
	{
		name: "Multiplication Flashcards",
		statement:
			"When I told my kids that I was going back to school to learn web development my son got very excited that I would soon be able to build video games for him. So I created this application for him to practice his multiplication facts. Yes, his response was somewhat underwhelming but it has been a practical solution to a current challenge. Next up, robots verus zombies (because I did promise).",
		image1: "Assets/projects/ingridhoffman.github.io_Multiplication-Flashcards.png",
		github: "https://github.com/ingridhoffman/Multiplication-Flashcards",
		link: "https://ingridhoffman.github.io/Multiplication-Flashcards/",
	},
	{
		name: "Weather Dashboard",
		statement:
			"This server-side API project challenged 'build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
		image1: "Assets/projects/ingridhoffman.github.io_WeatherDashboard.png",
		github: "https://github.com/ingridhoffman/WeatherDashboard",
		link: "https://ingridhoffman.github.io/WeatherDashboard/",
	},
	{
		name: "Eat De Burger",
		statement:
			"Fun web interface that allows users to imagine and (virtually) devour their own uniquely tasty hamburgers. This Node based app follows MVC design pattern and utilizes MySQL, Express, and Handlebars.",
		image1: "Assets/projects/EatDeBurger.png",
		github: "https://github.com/ingridhoffman/Eat-De-Burger",
		link: "https://dashboard.heroku.com/apps/eat-de-burger",
	},
	{
		name: "Workday Scheduler",
		statement:
			"Simple calendar application that allows the user to save events for each hour of the day. This browser application features dynamically updated HTML and CSS powered by jQuery as well as the Moment.js library.",
		image1: "Assets/projects/ingridhoffman.github.io_WorkdayScheduler.png",
		github: "https://github.com/ingridhoffman/WorkdayScheduler",
		link: "https://ingridhoffman.github.io/WorkdayScheduler/",
	},
];

// when document is ready
$(document).ready(function () {
	// populate project grid with project cards
	projects.forEach(function (object, index) {
		let cardDiv = `<div class="card-project" id="${index}"></div>`;
		let cardImage = `<img src="${object.image1}" alt="image of ${object.name}" />`;
		let projectInfo = `<div class="project-info invisible"><h3>${object.name}</h3><p class="small">${object.statement}</p><div class="right"><a href="${object.github}" rel="external" target="_blank" class="button small-button">github</a><a href="${object.link}" rel="external" target="_blank" class="button small-button">project</a></div></div>`;

		$("#portfolio").append(cardDiv);
		$("#" + index).append(cardImage);
		$("#" + index).append(projectInfo);
	});

	// event listener for mouse over projects
	$(".card-project").hover(
		// show card name on mouse enter
		function () {
			$(this).children(".project-info").removeClass("invisible");
			$(this).children("img").addClass("invisible");
		},
		// show image on mouse exit
		function () {
			$(this).children(".project-info").addClass("invisible");
			$(this).children("img").removeClass("invisible");
		}
	);
});
