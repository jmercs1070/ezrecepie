 
   
    
    const input = document.getElementById("userInput")

    const btn = document.getElementById("button")

    const body = document.getElementById("body")

        btn.addEventListener('click', clickedOn )

        input.addEventListener('keydown', (event)=>{
            if(event.keyCode === 13){
                clickedOn()
            }

    })
    const currentIngredients = []


    //submitbutton function
    function clickedOn()
    {
    //Checks if there is any ingredients
    if(input.value.length === 0){
        alert("Add an Ingredient before clicking this button!")
        return;
    }
    
        //creates button and appends onto screen
        const newButton = document.createElement('button')
        newButton.style.backgroundColor = 'Red'
        newButton.innerHTML = input.value
        body.appendChild(newButton)

        //Adds ingredient to array of ingredients
        currentIngredients.push(input.value)
        console.log(currentIngredients)

        //Header Variables
        const apikey = "&apiKey=18efb75d9bc148839a7c86210c422a0c"
        let ApiUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + input.value + apikey

 

    
        

        //establish connection to the API
        
        
        const userAction = async () => {
            const response = await fetch(ApiUrl);
            const myJson = await response.json()

        
            async function checkForExistence() {
            if(myJson.length == 0){
                input.value = " "
                alert("No results found for that ingredient. Sorry!")
                return
            }
        }
        checkForExistence()

          
        console.log(myJson)

        
        input.value = " "

        
    
        //When recipies are revealed aka when are you done button is clicked
        const areYouDoneButton = document.getElementById('searchButton')

        areYouDoneButton.addEventListener('click', ()=>{

            //Checks if there is no ingredients added
            if(currentIngredients.length === 0){
                alert("You don't have any ingredients, make sure to add some!")
            }
            //////////////////////////////////////////////////////////////////////////////////////

            // const newApiKey = "?apiKey=18efb75d9bc148839a7c86210c422a0c"

                for(const item of myJson){
                // let newURL = "https://api.spoonacular.com/recipes/" + item.id +  "/analyzedInstructions" + newApiKey
            
                const newIngredientConnection = () => {    
            // const newIngredientConnection = async () => {
                // const newResponse = await fetch(newURL)
                // const newMyJson = await newResponse.json()
                

               

                const newMyJson = [{
                    "name": "",
                    "steps": [
                        {
                            "equipment": [
                                {
                                    "id": 404784,
                                    "image": "oven.jpg",
                                    "name": "oven",
                                    "temperature": {
                                        "number": 200.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ],
                            "ingredients": [],
                            "number": 1,
                            "step": "Preheat the oven to 200 degrees F."
                        },
                        {
                            "equipment": [
                                {
                                    "id": 404661,
                                    "image": "whisk.png",
                                    "name": "whisk"
                                },
                                {
                                    "id": 404783,
                                    "image": "bowl.jpg",
                                    "name": "bowl"
                                }
                            ],
                            "ingredients": [
                                {
                                    "id": 19334,
                                    "image": "light-brown-sugar.jpg",
                                    "name": "light brown sugar"
                                },
                                {
                                    "id": 19335,
                                    "image": "sugar-in-bowl.png",
                                    "name": "granulated sugar"
                                },
                                {
                                    "id": 18371,
                                    "image": "white-powder.jpg",
                                    "name": "baking powder"
                                },
                                {
                                    "id": 18372,
                                    "image": "white-powder.jpg",
                                    "name": "baking soda"
                                },
                                {
                                    "id": 12142,
                                    "image": "pecans.jpg",
                                    "name": "pecans"
                                },
                                {
                                    "id": 20081,
                                    "image": "flour.png",
                                    "name": "all purpose flour"
                                },
                                {
                                    "id": 2047,
                                    "image": "salt.jpg",
                                    "name": "salt"
                                }
                            ],
                            "number": 2,
                            "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
                        },
                        {
                            "equipment": [
                                {
                                    "id": 404661,
                                    "image": "whisk.png",
                                    "name": "whisk"
                                },
                                {
                                    "id": 404783,
                                    "image": "bowl.jpg",
                                    "name": "bowl"
                                }
                            ],
                            "ingredients": [
                                {
                                    "id": 2050,
                                    "image": "vanilla-extract.jpg",
                                    "name": "vanilla extract"
                                },
                                {
                                    "id": 93622,
                                    "image": "vanilla.jpg",
                                    "name": "vanilla bean"
                                },
                                {
                                    "id": 1230,
                                    "image": "buttermilk.jpg",
                                    "name": "buttermilk"
                                },
                                {
                                    "id": 1123,
                                    "image": "egg.png",
                                    "name": "egg"
                                }
                            ],
                            "number": 3,
                            "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
                        },
                        {
                            "equipment": [],
                            "ingredients": [
                                {
                                    "id": 1123,
                                    "image": "egg.png",
                                    "name": "egg"
                                }
                            ],
                            "number": 4,
                            "step": "Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix."
                        },
                        {
                            "equipment": [],
                            "ingredients": [],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            },
                            "number": 5,
                            "step": "Let the batter sit at room temperature for at least 15 minutes and up to 30 minutes before using."
                        },
                        {
                            "equipment": [
                                {
                                    "id": 404779,
                                    "image": "griddle.jpg",
                                    "name": "griddle"
                                },
                                {
                                    "id": 404645,
                                    "image": "pan.png",
                                    "name": "frying pan"
                                }
                            ],
                            "ingredients": [],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            },
                            "number": 6,
                            "step": "Heat a cast iron or nonstick griddle pan over medium heat and brush with melted butter. Once the butter begins to sizzle, use 2 tablespoons of the batter for each pancake and cook until the bubbles appear on the surface and the bottom is golden brown, about 2 minutes, flip over and cook until the bottom is golden brown, 1 to 2 minutes longer."
                        },
                        {
                            "equipment": [
                                {
                                    "id": 404784,
                                    "image": "oven.jpg",
                                    "name": "oven",
                                    "temperature": {
                                        "number": 200.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ],
                            "ingredients": [],
                            "number": 7,
                            "step": "Transfer the pancakes to a platter and keep warm in a 200 degree F oven."
                        },
                        {
                            "equipment": [],
                            "ingredients": [
                                {
                                    "id": 10014037,
                                    "image": "bourbon.png",
                                    "name": "bourbon"
                                }
                            ],
                            "number": 8,
                            "step": "Serve 6 pancakes per person, top each with some of the bourbon butter."
                        },
                        {
                            "equipment": [],
                            "ingredients": [
                                {
                                    "id": 19336,
                                    "image": "powdered-sugar.jpg",
                                    "name": "powdered sugar"
                                },
                                {
                                    "id": 19911,
                                    "image": "maple-syrup.png",
                                    "name": "maple syrup"
                                }
                            ],
                            "number": 9,
                            "step": "Drizzle with warm maple syrup and dust with confectioners' sugar."
                        },
                        {
                            "equipment": [],
                            "ingredients": [
                                {
                                    "id": 12142,
                                    "image": "pecans.jpg",
                                    "name": "pecans"
                                }
                            ],
                            "number": 10,
                            "step": "Garnish with fresh mint sprigs and more toasted pecans, if desired."
                        }
                    ]
                },
                {
                    "name": "Bourbon Molasses Butter",
                    "steps": [
                        {
                            "equipment": [
                                {
                                    "id": 404669,
                                    "image": "sauce-pan.jpg",
                                    "name": "sauce pan"
                                }
                            ],
                            "ingredients": [
                                {
                                    "id": 10014037,
                                    "image": "bourbon.png",
                                    "name": "bourbon"
                                },
                                {
                                    "id": 19335,
                                    "image": "sugar-in-bowl.png",
                                    "name": "sugar"
                                }
                            ],
                            "number": 1,
                            "step": "Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool."
                        },
                        {
                            "equipment": [
                                {
                                    "id": 404771,
                                    "image": "food-processor.png",
                                    "name": "food processor"
                                }
                            ],
                            "ingredients": [
                                {
                                    "id": 19304,
                                    "image": "molasses.jpg",
                                    "name": "molasses"
                                },
                                {
                                    "id": 10014037,
                                    "image": "bourbon.png",
                                    "name": "bourbon"
                                },
                                {
                                    "id": 2047,
                                    "image": "salt.jpg",
                                    "name": "salt"
                                }
                            ],
                            "number": 2,
                            "step": "Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth."
                        },
                        {
                            "equipment": [
                                {
                                    "id": 404730,
                                    "image": "plastic-wrap.jpg",
                                    "name": "plastic wrap"
                                },
                                {
                                    "id": 404783,
                                    "image": "bowl.jpg",
                                    "name": "bowl"
                                }
                            ],
                            "ingredients": [],
                            "number": 3,
                            "step": "Scrape into a bowl, cover with plastic wrap and refrigerate for at least 1 hour to allow the flavors to meld."
                        },
                        {
                            "equipment": [],
                            "ingredients": [],
                            "length": {
                                "number": 30,
                                "unit": "minutes"
                            },
                            "number": 4,
                            "step": "Remove from the refrigerator about 30 minutes before using to soften."
                        }
                    ]
                }
                ]
              
                console.log(newMyJson)

                if(newMyJson.length){

                console.log(newMyJson)
                //Document stuff
                const div = document.createElement("div")
                body.appendChild(div)
                const image = document.createElement("img")
                div.appendChild(image)
                image.src = item.image
    
                const stepsListOl = document.createElement("ol")

                for(const item of newMyJson){
                const stepList = item.steps                
                const ingredientsNeeded = document.createElement('p')     
                
                for(const actualStep of stepList){
                              
                                console.log(newMyJson)
                                const stepText = document.createElement("li")
                                stepText.innerHTML = actualStep.step
                                stepsListOl.appendChild(stepText)
                                div.appendChild(stepsListOl)

                                ingredientsNeeded.innerHTML = "Here are the ingredients needed: " 

                                const actualIngredient = actualStep.ingredients
                                
                                for(ingredientsToDisplay of actualIngredient){

                                    ingredientsNeeded.innerHTML += `${ingredientsToDisplay.name}, `
                                                                
                                }   
                                div.appendChild(ingredientsNeeded)  
                                
        
                        } 
                    }
                } else {
                    console.log('this one did not have any items')
                }
            
        //ingredientconnection
            }
            ///
            newIngredientConnection()
        

    //forloop
        }
        ///////


        //Click event
        }
        ///////
                
            
            
            
    
        )}
        userAction()
        
    
    }           
        //end of add eventlistener
    

        
            
    

    
