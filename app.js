
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    
    // Create Dino Objects 
    const triceratops = new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");
    const trex = new Dino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
    const anklyosaurus = new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
    const brachiosaurus = new Dino("Brachiosaurus", 70000, "372", "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
    const stegosaurus = new Dino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
    const elasmosaurus = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
    const pteranodon = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
    const pigeon = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");

    const dinoArr = [triceratops, trex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];

    // Create Human Object
    const human = {};
    
        // Use IIFE to get human data from form
    const btn = document.getElementById("btn");
    
    btn.addEventListener("click", (function(){
        function getIdValue(id) {
            return document.getElementById(id).value;
        }
    
        return function(){
            console.log("YEAH");
            const name = getIdValue("name");
            const feet = getIdValue("feet");
            const inches = getIdValue("inches");
            const weight = getIdValue("weight");
            const diet = getIdValue("diet");
            const totalHeight =+ inches + (feet*12);
            console.log(name);
            console.log(totalHeight);
            console.log(weight);
            console.log(diet);
        
            human.name = name;
            human.totalHeight = totalHeight;
            human.weight = weight;
            human.diet = diet;


                
        // Create Dino Compare Method 1
        // NOTE: Weight in JSON file is in lbs, height in inches. 
        
            function weightCompare(DinoWeight, HumanWeight, DinoName){
                if(DinoWeight < HumanWeight){
                    return `${DinoName} weighs less then ${name}`
                } else if( DinoWeight > HumanWeight){
                    return `${name} weighs less then ${DinoName}`
                } else {
                    return `${name} weighs the same as a(n) ${DinoName}`
                }
            }


        // Create Dino Compare Method 2
        // NOTE: Weight in JSON file is in lbs, height in inches.

            function heightCompare(DinoHeight, HumanHeight, DinoName){
                if(DinoHeight < HumanHeight){
                    return `${DinoName} is shorter then ${name}`
                } else if(DinoHeight > HumanHeight){
                    return `${name} is shorter then ${DinoName}`
                } else {
                    return `${name} and ${DinoName} are the same height`
                }
            }

                    
        // Create Dino Compare Method 3
        // NOTE: Weight in JSON file is in lbs, height in inches.
    

            function dietCompare(DinoDiet, HumanDiet, DinoName){
                if(DinoDiet === HumanDiet){
                    return `${name} and the ${DinoName} have the same diet`
                } else {
                    return `${name} is a(n) ${HumanDiet} and the ${DinoName} is a(n) ${DinoDiet}`
                }
            }
        
        const grid = document.getElementById("grid");

        dinoArr.forEach((dino)=>{
            const tile = document.createElement("div");
            const species = document.createElement("h3");
            const fact = document.createElement("p");
            const img = document.createElement("img");

            species.textContent = dino.species;
            fact.textContent = dino.fact;
            img.src = `./images/${dino.species}.png`

            tile.setAttribute("class", "grid-item")

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
        
        }


    })());
    

    
        // Generate Tiles for each Dino in Array
      
            // Add tiles to DOM
    
        // Remove form from screen
    
    
    // On button click, prepare and display infographic
    