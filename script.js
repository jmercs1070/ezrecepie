 
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
        
        console.log(myJson)
        input.value = " "

        
        
  //END OF clickedOn Function 
    
        //When recipies are revealed aka when are you done button is clicked
        const areYouDoneButton = document.getElementById('areYouDoneButton')

        areYouDoneButton.addEventListener('click', ()=>{

            //Checks if there is no ingredients added
            if(currentIngredients.length === 0){
                alert("You don't have any ingredients, make sure to add some!")
            }
            //////////////////////////////////////////////////////////////////////////////////////
            console.log("pp")
            const newApiKey = "?apiKey=18efb75d9bc148839a7c86210c422a0c"
            let newURL = "https://api.spoonacular.com/recipes/" + "/analyzedInstructions" + newApiKey "&stepBreakdown=true"
            const newIngredientConnection = async () => {
                const newResponse = await fetch(newURL);
                const newMyJson = await newResponse.json()
                console.log(newMyJson)
            }
                for(item of myJson){
                const dataGotBack = []
                dataGotBack.push(item) 
                console.log(dataGotBack[0].id)
                let newURL = "https://api.spoonacular.com/recipes/" + dataGotBack[0].id +  "/analyzedInstructions" + newApiKey + "&stepBreakdown=true"
                newIngredientConnection()
            }

                
                }
            
            
    
        )}
        userAction()
        
    
    }           
        //end of add eventlistener
    

        
            
    

    
