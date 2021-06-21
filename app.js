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

const dinoArr = [];
// Create Dino Objects
dinos.forEach((dino) => {
	const { species, weight, height, diet, where, when, fact } = dino;
	const dinoObj = new Dino(species, weight, height, diet, where, when, fact);
	dinoArr.push(dinoObj);
});

// Create Human Object
const human = {};

// Use IIFE to get human data from form
const btn = document.getElementById("btn");

btn.addEventListener(
	"click",
	(function () {
		function getIdValue(id) {
			return document.getElementById(id).value;
		}

		return function () {
			const name = getIdValue("name");
			const feet = getIdValue("feet");
			const inches = getIdValue("inches");
			const weight = getIdValue("weight");
			const diet = getIdValue("diet");
			const totalHeight = +inches + feet * 12;

			human.name = name;
			human.totalHeight = totalHeight;
			human.weight = weight;
			human.diet = diet;

			// Create Dino Compare Method 1
			// NOTE: Weight in JSON file is in lbs, height in inches.

			function weightCompare(DinoWeight, DinoName) {
				if (DinoWeight < human.weight) {
					return `${DinoName} weighs less then ${name}`;
				} else if (DinoWeight > human.weight) {
					return `${name} weighs less then ${DinoName}`;
				} else {
					return `${name} weighs the same as a(n) ${DinoName}`;
				}
			}

			// Create Dino Compare Method 2
			// NOTE: Weight in JSON file is in lbs, height in inches.

			function heightCompare(DinoHeight, DinoName) {
				if (DinoHeight < human.totalHeight) {
					return `${DinoName} is shorter then ${name}`;
				} else if (DinoHeight > human.totalHeight) {
					return `${name} is shorter then ${DinoName}`;
				} else if (DinoHeight === human.totalHeight) {
					return `${name} and ${DinoName} are the same height`;
				}
			}

			// Create Dino Compare Method 3
			// NOTE: Weight in JSON file is in lbs, height in inches.

			function dietCompare(DinoDiet, DinoName) {
				if (DinoDiet === human.diet) {
					return `${name} and the ${DinoName} have the same diet`;
				} else {
					return `${name} is a(n) ${human.diet} and the ${DinoName} is a(n) ${DinoDiet}`;
				}
			}

			const grid = document.getElementById("grid");

			dinoArr.forEach((dino) => {
				function findFact() {
					if (dino.species === "Pigeon") {
						return dino.fact;
					}

					const number = Math.floor(Math.random() * 6);
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

				const tile = document.createElement("div");
				const species = document.createElement("h3");
				const fact = document.createElement("p");
				const img = document.createElement("img");

				species.textContent = dino.species;
				fact.textContent = findFact();
				img.src = `./images/${dino.species}.png`;

				tile.setAttribute("class", "grid-item");

				tile.append(species);
				tile.append(fact);
				tile.append(img);

				grid.append(tile);
			});

			const humanTile = document.createElement("Div");
			const humanName = document.createElement("h3");
			const humanImg = document.createElement("img");

			humanName.textContent = name;
			humanImg.src = `./images/human.png`;

			humanTile.setAttribute("class", "grid-item");

			humanTile.append(humanName);
			humanTile.append(humanImg);

			grid.insertBefore(humanTile, grid.childNodes[4]);

			const form = document.getElementById("dino-compare");
			form.remove();
		};
	})()
);
