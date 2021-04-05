 
    //https://api.spoonacular.com/recipes/716429/information?includeNutrition=false => Potential API
    
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
        newButton.style.innerHTML = "background-color: green;"
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
        const areYouDoneButton = document.getElementById('areYouDoneButton')

        areYouDoneButton.addEventListener('click', ()=>{

            //Checks if there is no ingredients added
            if(currentIngredients.length === 0){
                alert("You don't have any ingredients, make sure to add some!")
            }
            //////////////////////////////////////////////////////////////////////////////////////

            const newApiKey = "?apiKey=18efb75d9bc148839a7c86210c422a0c"

                for(const item of myJson){
                let newURL = "https://api.spoonacular.com/recipes/" + item.id +  "/analyzedInstructions" + newApiKey
            
            const newIngredientConnection = async () => {
                const newResponse = await fetch(newURL)
                const newMyJson = await newResponse.json()

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

                        
                            for(actualStep of stepList){
                              
                            
                                console.log(newMyJson)
                                const stepText = document.createElement("li")
                                stepText.innerHTML = actualStep.step
                                stepsListOl.appendChild(stepText)
                                div.appendChild(stepsListOl)
        
                        } 
                    }
                } else {
                    console.log('this one did not have any items')
                }
            
        //ingredientconnection
            }
            /////
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
    

        
            
    

    
