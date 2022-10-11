// Created by Preet Dhadda on July 23, 2020 for My_Star_Wars_Character.html

// Present questions to the user 
const questionA = "Choose your ideal home:";
const questionB = "How would your friends describe you?";
const questionC = "What is your ideal vacation destination?";
const questionD = "What annoys you?";
const questionE = "Choose your weapon:";
const questionF = "What is your greatest strength?";
const questionG = "What is your choice of outfit?";
const questionH = "What do you like to do on weekends?";
const questionI = "What is your moral code?";
const questionJ = "Which is your ideal pet?";

// Order the questions in order of appearance so the iterator knows which question to present next 
const questions = [
	questionA,
	questionB,
	questionC,
	questionD,
	questionE,
	questionF,
	questionG,
	questionH,
	questionI,
	questionJ,
];

// Present multiple choice answers to the user for each question
const answerA = {
	answer1: "Large castle",
	character1: "DarthVader",
	answer2: "Wooden house surrounded by forestry",
	character2: "Yoda",
	answer3: "Small home on a large lot",
	character3: "LukeSkywalker",
	answer4: "Modern home in a busy city",
	character4: "HanSolo",
	answer5: "Large house but very isolated",
	character5: "BobaFett",
};

const answerB = {
	answer1: "Calm",
	character1: "Yoda",
	answer2: "Bossy",
	character2: "DarthVader",
	answer3: "Optimistic",
	character3: "LukeSkywalker",
	answer4: "Resourceful",
	character4: "BobaFett",
	answer5: "Materialistic",
	character5: "HanSolo",
};

const answerC = {
	answer1: "Enjoying the nightlife in Tokyo",
	character1: "HanSolo",
	answer2: "Visiting the pyramids in Egypt",
	character2: "LukeSkywalker",
	answer3: "African safari",
	character3: "BobaFett",
	answer4: "Visiting volcanoes in Hawaii",
	character4: "DarthVader",
	answer5: "Spa get-away in Thailand",
	character5: "Yoda",
};

const answerD = {
	answer1: "Failure",
	character1: "DarthVader",
	answer2: "Not getting your way",
	character2: "HanSolo",
	answer3: "Not being respected",
	character3: "BobaFett",
	answer4: "Letting people down",
	character4: "LukeSkywalker",
	answer5: "Nothing",
	character5: "Yoda",
};

const answerE = {
	answer1: "Lightsaber",
	character1: "LukeSkywalker",
	answer2: "Blaster",
	character2: "HanSolo",
	answer3: "Dark side of the Force",
	character3: "DarthVader",
	answer4: "Light side of the Force",
	character4: "Yoda",
	answer5: "Flamethrower",
	character5: "BobaFett",
};

const answerF = {
	answer1: "Resilience",
	character1: "BobaFett",
	answer2: "Ambition",
	character2: "LukeSkywalker",
	answer3: "Loyalty",
	character3: "HanSolo",
	answer4: "Assertiveness",
	character4: "DarthVader",
	answer5: "Patience",
	character5: "Yoda",
};

const answerG = {
	answer1: "Simple",
	character1: "Yoda",
	answer2: "Comfortable",
	character2: "LukeSkywalker",
	answer3: "Trendy",
	character3: "HanSolo",
	answer4: "All black",
	character4: "DarthVader",
	answer5: "Functional",
	character5: "BobaFett",
};

const answerH = {
	answer1: "Party",
	character1: "HanSolo",
	answer2: "Be alone",
	character2: "DarthVader",
	answer3: "Travel",
	character3: "BobaFett",
	answer4: "Relax",
	character4: "Yoda",
	answer5: "Train/practice",
	character5: "LukeSkywalker",
};

const answerI = {
	answer1: "Do what is right and ethical",
	character1: "LukeSkywalker",
	answer2: "Be patient and logical",
	character2: "Yoda",
	answer3: "Never fail",
	character3: "DarthVader",
	answer4: "Protect yourself at all costs",
	character4: "BobaFett",
	answer5: "Protect those important to you",
	character5: "HanSolo",
};

const answerJ = {
	answer1: "Monkey",
	character1: "HanSolo",
	answer2: "Wolf",
	character2: "BobaFett",
	answer3: "Bird",
	character3: "Yoda",
	answer4: "Hamster",
	character4: "LukeSkywalker",
	answer5: "Bear",
	character5: "DarthVader",
};

// Order the answer sets to ensure the correct answers appear for the coinciding question
const answers = [
	answerA,
	answerB,
	answerC,
	answerD,
	answerE,
	answerF,
	answerG,
	answerH,
	answerI,
	answerJ,
];

// Present the user with their winning character and a description of that character
const resultVader = 
	"You are Darth Vader! One of the most fear-instilling and powerful lightsaber-wielders to ever walk the galaxy. You enjoy force choking those who annoy you and intimidating your subordinates. As cut-throat and merciless as you are, there is still good in you no matter how hard you fight it.";
const resultYoda = 
	"You are Yoda! You are the wisest Jedi to ever live. You are incredibly calm, patient, and you always seem to know what is right. You may be judged by your size and you may talk funny but your knowledge of the force makes you one of the most powerful Jedi in the galaxy.";
const resultBoba = 
	"You are Boba Fett! Your father was a bounty hunter so you are a natural at your craft. Your high status and reputation precede you as you are incredibly handy with a blaster, flamethrower, and jetpack. Childhood trauma haunts you but has made you stronger and more determined.";
const resultHan = 
	"You are Han Solo! A money-driven, witty smuggler with a great knack for getting out of trouble with your words. Your best friend is a seven-foot-five Wookie, you always carry a good blaster at your side, and you are one of the best pilots in the galaxy.";
const resultLuke = 
	"You are Luke Skywalker! Some doubted you at first but you are now renowned as the most powerful Jedi to ever exist. You are driven, family-focused, passionate about justice; but most of all, you see the good in others. You restored hope in a galaxy of turmoil.";

// Assign points to each character based on number of clicks for that character
let points = {
	DarthVader: 0,
	LukeSkywalker: 0,
	BobaFett: 0,
	Yoda: 0, 
	HanSolo: 0,
};

// Create iterator and set its value (for the first question to automatically appear on website)
let iterator = 0;

// Call function to increment the iterator to make it display subsequent questions
displayQuestionAndAnswers(iterator);

// Get buttons from HTML, attach eventHandler to buttons via eventListener
	// Start button: 
document.getElementById("Start").addEventListener("click", eventHandlerStart);
	// Answer buttons: 
document.getElementById("buttonA").addEventListener("click", eventHandlerA);
document.getElementById("buttonB").addEventListener("click", eventHandlerB);
document.getElementById("buttonC").addEventListener("click", eventHandlerC);
document.getElementById("buttonD").addEventListener("click", eventHandlerD);
document.getElementById("buttonE").addEventListener("click", eventHandlerE);
	// Redo quiz button: 
document.getElementById("redo").addEventListener("click", eventHandlerRedo);

//FUNCTIONS: 

// Create eventHandler for the start button to present the first question after the click and make the "start" div and the "results" div invisible
function eventHandlerStart() {
	document.getElementById("Start").style.visibility = "hidden";
	document.getElementById("QuestionAndAnswer").style.visibility = "visible";
	document.getElementById("results").style.visibility = "hidden";
}

// Create function for attaching question and answers text from above to appropriate HTML elements
function displayQuestionAndAnswers(x) {
	// Question text: 
	document.getElementById("question").innerHTML = questions[x];
	// Answer buttons: 
	document.getElementById("buttonA").innerHTML = answers[x].answer1;
	document.getElementById("buttonB").innerHTML = answers[x].answer2;
	document.getElementById("buttonC").innerHTML = answers[x].answer3;
	document.getElementById("buttonD").innerHTML = answers[x].answer4;
	document.getElementById("buttonE").innerHTML = answers[x].answer5;
}

// Create eventHandler for the button at the end of the quiz allowing the user to redo the quiz
	// Reset the iterator and the points
	// Ensure question1 is displayed first
	// Make the "start" div and the "results" div invisible
function eventHandlerRedo() {
	iterator = 0;
	points.DarthVader = 0;
	points.LukeSkywalker = 0;
	points.BobaFett = 0;
	points.Yoda = 0;
	points.HanSolo = 0;
	document.getElementById("Start").style.visibility = "hidden";
	document.getElementById("QuestionAndAnswer").style.visibility = "visible";
	document.getElementById("results").style.visibility = "hidden";
	displayQuestionAndAnswers(iterator);
}

// Create eventHandlers for each answer button to: 
	// 1. Recognize which character has been chosen from each click
	// 2. Call the function that adds points to the chosen characters
	// 3. Increment the iterator to display the next question
	// 4. Call the function that decides the winning character
	// 5. Know when to make the "results" div visible and the "question and answers" div invisible
	// 6. Call the function that displays the next question after a click 
function eventHandlerA() {
	const character = answers[iterator].character1;
	incremementCharacterPoint(character);

	iterator = iterator + 1;

	if (iterator >= questions.length) {
		findWinningCharacter();
		document.getElementById("Start").style.visibility = "hidden";
		document.getElementById("QuestionAndAnswer").style.visibility = "hidden";
		document.getElementById("results").style.visibility = "visible";
	} else {
		displayQuestionAndAnswers(iterator);
	}
}

function eventHandlerB() {
	const character = answers[iterator].character2;
	incremementCharacterPoint(character);

	iterator = iterator + 1;

	if (iterator >= questions.length) {
		findWinningCharacter();
		document.getElementById("Start").style.visibility = "hidden";
		document.getElementById("QuestionAndAnswer").style.visibility = "hidden";
		document.getElementById("results").style.visibility = "visible";
	} else { 
		displayQuestionAndAnswers(iterator);
	}
}

function eventHandlerC() {
	const character = answers[iterator].character3;
	incremementCharacterPoint(character);

	iterator = iterator + 1;

	if (iterator >= questions.length) {
		findWinningCharacter();
		document.getElementById("Start").style.visibility = "hidden";
		document.getElementById("QuestionAndAnswer").style.visibility = "hidden";
		document.getElementById("results").style.visibility = "visible";
	} else { 
		displayQuestionAndAnswers(iterator);
	}
}

function eventHandlerD() {
	const character = answers[iterator].character4;
	incremementCharacterPoint(character);

	iterator = iterator + 1;

	if (iterator >= questions.length) {
		findWinningCharacter();
		document.getElementById("Start").style.visibility = "hidden";
		document.getElementById("QuestionAndAnswer").style.visibility = "hidden";
		document.getElementById("results").style.visibility = "visible";
	} else { 
		displayQuestionAndAnswers(iterator);
	}
}

function eventHandlerE() {
	const character = answers[iterator].character5;
	incremementCharacterPoint(character);

	iterator = iterator + 1;

	if (iterator >= questions.length) {
		findWinningCharacter();
		document.getElementById("Start").style.visibility = "hidden";
		document.getElementById("QuestionAndAnswer").style.visibility = "hidden";
		document.getElementById("results").style.visibility = "visible";
	} else { 
		displayQuestionAndAnswers(iterator);
	}
}

// Create a function to add a point to the selected character's tally 
function incremementCharacterPoint(char) {
	if (char === "DarthVader") {
		points.DarthVader = points.DarthVader + 1;

	} else if (char === "BobaFett") {
		points.BobaFett = points.BobaFett + 1;

	} else if (char === "Yoda") {
		points.Yoda = points.Yoda + 1;

	} else if (char === "LukeSkywalker") {
		points.LukeSkywalker = points.LukeSkywalker + 1;

	} else if (char === "HanSolo") {
		points.HanSolo = points.HanSolo + 1;
	}
}

// Create a function to:
	// 1. Choose the character with the highest amount of points
	// 2. Display that character's description and picture to the user
function findWinningCharacter() {
	let highestCharacter = "DarthVader";
	let highestPoints = points.DarthVader;
	document.getElementById("ResultsWriteup").innerHTML = resultVader;
	document.getElementById("InsertPicture").src = "Images/darth_vader2.png";
		// Image retrieved from https://www.slashfilm.com/lets-talk-about-darth-vader-in-rogue-one/

	if (points.BobaFett > highestPoints) {
		highestCharacter = "BobaFett";
		highestPoints = points.BobaFett;
		document.getElementById("ResultsWriteup").innerHTML = resultBoba;
		document.getElementById("InsertPicture").src = "Images/boba_fett2.png";
			// Image retrieved from https://www.denofgeek.com/movies/star-wars-boba-fett-facts/
	}

	if (points.Yoda > highestPoints) {
		highestCharacter = "Yoda";
		highestPoints = points.Yoda;
		document.getElementById("ResultsWriteup").innerHTML = resultYoda;
		document.getElementById("InsertPicture").src = "Images/yoda2.png";
			// Image retrieved from https://www.cbr.com/star-wars-most-dangerous-broken-jedi-yoda/
	}

	if (points.LukeSkywalker > highestPoints) {
		highestCharacter = "LukeSkywalker";
		highestPoints = points.LukeSkywalker;
		document.getElementById("ResultsWriteup").innerHTML = resultLuke;
		document.getElementById("InsertPicture").src = "Images/luke_skywalker2.png";
			// Image retrieved from https://the-void.co.uk/film/feature/star-wars-and-the-over-40s-835/attachment/luke-skywalker-star-wars-a-new-hope/
	}

	if (points.HanSolo > highestPoints) {
		highestCharacter = "HanSolo";
		highestPoints = points.HanSolo;
		document.getElementById("ResultsWriteup").innerHTML = resultHan;
		document.getElementById("InsertPicture").src = "Images/han_solo2.png";
			// Image retrieved from https://www.polygon.com/2018/5/24/17387172/han-solo-star-wars-canon-marvel-comics
	}

	return highestCharacter;
}








