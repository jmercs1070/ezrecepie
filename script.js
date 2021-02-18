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

        input.value = " "
        }

        //When recipies are revealed aka when are you done button is clicked
        const areYouDoneButton = document.getElementById('areYouDoneButton')
        areYouDoneButton.addEventListener('click', ()=>{
            //Checks if there is no ingredients added
            if(currentIngredients.length === 0){
                alert("You don't have any ingredients, make sure to add some!")
                body.appendChild(areYouDoneButton)
            }
            
            //shows recipies
            switch (input.value) {
                case 'lol':
                alert('what\'s so funny?')
                break;

                case 'change background':
                
            }
        })
        
            
    

    
