const input = document.getElementById("userInput")

const btn = document.getElementById("button")

const body = document.getElementById("body")

    btn.addEventListener('click', clickedOn )

    input.addEventListener('keydown', (event)=>{
        if(event.keyCode === 13){
            clickedOn()
        }

})

function clickedOn()
{
   
    const newButton = document.createElement('button')
    newButton.innerHTML = input.value
    body.appendChild(newButton)

    const currentIngredients = [ ]
    currentIngredients.push(input.value)
     
    console.log(currentIngredients)

    if(currentIngredients.length >= 1 && currentIngredients.length < 2){
        const areYouDoneButton = document.createElement('button')
        body.appendChild(areYouDoneButton)
        areYouDoneButton.innerHTML = "Are you done? If so, click this button to  move on!"
    }

    input.value = " "

    //random stuff
    switch(input.value) {
        case 'joandy is cool':
        alert('joandy is cool thx m8')
        break;

        case 'change': 
        document.body.style.backgroundColor = 'red'
        break;
        case 'patrick is the best':
        alert('patrick is cooler ')
    }
    //end of random stuff
}
