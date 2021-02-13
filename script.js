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

    // creates ingredient button and displays on the page
        const newButton = document.createElement('button')
        newButton.innerHTML = input.value
        body.appendChild(newButton)

        //Adds ingredient to array of ingredients
        currentIngredients.push(input.value)
        console.log(currentIngredients)

        //Asks if theres more than 1 item, then appends button onto screen
        const areYouDoneButton = document.createElement('button');
        if(currentIngredients.length > 1){
            body.appendChild(areYouDoneButton)
            areYouDoneButton.innerHTML = "Are you done? If so, click this button to move on!"
        }

        //When recipies are revealed aka when are you done button is clicked

        areYouDoneButton.addEventListener('click', ()=>{
            if(currentIngredients.length === 1){
                alert("You don't have any ingredients, make sure to add some!")
                body.appendChild(areYouDoneButton)
                areYouDoneButton.innerHTML = "Are you done? If so, click this button to move on!"
            }
            
            //shows recipies
        })
        
            input.value = " "
    
    //END OF FUNCTION
    }
