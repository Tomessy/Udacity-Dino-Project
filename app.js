//Array of dinos
const dinos = [
	{
		species: "Triceratops",
		weight: 13000,
		height: 114,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "First discovered in 1889 by Othniel Charles Marsh",
	},
	{
		species: "Tyrannosaurus Rex",
		weight: 11905,
		height: 144,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "The largest known skull measures in at 5 feet long.",
	},
	{
		species: "Anklyosaurus",
		weight: 10500,
		height: 55,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Anklyosaurus survived for approximately 135 million years.",
	},
	{
		species: "Brachiosaurus",
		weight: 70000,
		height: "372",
		diet: "herbavor",
		where: "North America",
		when: "Late Jurasic",
		fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
	},
	{
		species: "Stegosaurus",
		weight: 11600,
		height: 79,
		diet: "herbavor",
		where: "North America, Europe, Asia",
		when: "Late Jurasic to Early Cretaceous",
		fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
	},
	{
		species: "Elasmosaurus",
		weight: 16000,
		height: 59,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
	},
	{
		species: "Pteranodon",
		weight: 44,
		height: 20,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
	},
	{
		species: "Pigeon",
		weight: 0.5,
		height: 9,
		diet: "herbavor",
		where: "World Wide",
		when: "Holocene",
		fact: "All birds are living dinosaurs.",
	},
];

// Creates Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
	this.species = species;
	this.weight = weight;
	this.height = height;
	this.diet = diet;
	this.where = where;
	this.when = when;
	this.fact = fact;
}

//makes an empty array to push the Dino objects to in the next part
const dinoArr = [];

// Create Dino Objects and pushes them into the Dino Array
dinos.forEach((dino) => {
	const { species, weight, height, diet, where, when, fact } = dino;
	const dinoObj = new Dino(species, weight, height, diet, where, when, fact);
	dinoArr.push(dinoObj);
});

// Create empty Human Object
const human = {};

// Gets button and stores it in a var named btn
const btn = document.getElementById("btn");

//on a click it executes the rest of the code
btn.addEventListener(
	"click",
	(function () {
		function getIdValue(id) {
			return document.getElementById(id).value;
		}

		return function () {
			//assigns form data to consts
			const name = getIdValue("name");
			const feet = getIdValue("feet");
			const inches = getIdValue("inches");
			const weight = getIdValue("weight");
			const diet = getIdValue("diet");
			//finds the totalHeight in inches
			const totalHeight = +inches + feet * 12;

			//adds name, totalHeight, weight, and diet to the human object
			human.name = name;
			human.totalHeight = totalHeight;
			human.weight = weight;
			human.diet = diet;

			//makes the weight compare function
			function weightCompare(DinoWeight, DinoName) {
				if (DinoWeight < human.weight) {
					return `${DinoName} weighs less then ${name}`;
				} else if (DinoWeight > human.weight) {
					return `${name} weighs less then ${DinoName}`;
				} else {
					return `${name} weighs the same as a(n) ${DinoName}`;
				}
			}

			// makes the height compare function

			function heightCompare(DinoHeight, DinoName) {
				if (DinoHeight < human.totalHeight) {
					return `${DinoName} is shorter then ${name}`;
				} else if (DinoHeight > human.totalHeight) {
					return `${name} is shorter then ${DinoName}`;
				} else if (DinoHeight === human.totalHeight) {
					return `${name} and ${DinoName} are the same height`;
				}
			}

			// makes the diet compare function

			function dietCompare(DinoDiet, DinoName) {
				if (DinoDiet === human.diet) {
					return `${name} and the ${DinoName} have the same diet`;
				} else {
					return `${name} is a(n) ${human.diet} and the ${DinoName} is a(n) ${DinoDiet}`;
				}
			}

			//gets the grid element and assigns it to the const grid
			const grid = document.getElementById("grid");

			//for each dino in the dino Array do the following
			dinoArr.forEach((dino) => {
				function findFact() {
					// if pigeon return the standard fact.
					if (dino.species === "Pigeon") {
						return dino.fact;
					}

					//if not a pigeon get a random number between 0 and 5
					const number = Math.floor(Math.random() * 6);
					//depending what number it is depends on the fact it will return to be displayed
					switch (number) {
						case 0:
							return dino.fact;
						case 1:
							return weightCompare(dino.weight, dino.species);
						case 2:
							return heightCompare(dino.height, dino.species);
						case 3:
							return dietCompare(dino.diet, dino.species);
						case 4:
							return `The ${dino.species} weighs ${dino.weight} pounds!`;
						case 5:
							const feet = Math.floor(dino.height / 12);
							const inches = dino.height % 12;
							if (inches > 0) {
								return `The ${dino.species} is ${feet} feet and ${inches} inches tall!`;
							} else {
								return `The ${dino.species} is ${feet} feet tall!`;
							}

						default:
							break;
					}
				}
				//creates the tile and its children
				const tile = document.createElement("div");
				const species = document.createElement("h3");
				const fact = document.createElement("p");
				const img = document.createElement("img");

				//adds text to species. Calls findFact function and displays what is returned. Adds the src attribute to the image based on the dino
				species.textContent = dino.species;
				fact.textContent = findFact();
				img.src = `./images/${dino.species}.png`;

				//adds the grid-item class to tile
				tile.setAttribute("class", "grid-item");

				//appends species fact and img as children to tile
				tile.append(species);
				tile.append(fact);
				tile.append(img);

				//adds tile to the grid
				grid.append(tile);
			});

			//creates the human tile with name and image tags as well
			const humanTile = document.createElement("Div");
			const humanName = document.createElement("h3");
			const humanImg = document.createElement("img");

			//makes the humanName content = to the name given on the form and sets the human image src property
			humanName.textContent = name;
			humanImg.src = `./images/human.png`;

			//adds the grid-item class to the human tile
			humanTile.setAttribute("class", "grid-item");

			//makes humanName and humanImg children of the humanTile
			humanTile.append(humanName);
			humanTile.append(humanImg);

			//insets into the middle of the grid
			grid.insertBefore(humanTile, grid.childNodes[4]);

			// grabs form then removes it from the dom.
			const form = document.getElementById("dino-compare");
			form.remove();
		};
	})()
);
