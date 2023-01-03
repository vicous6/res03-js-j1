// /**
//  * Créer ici le projet bonus de calculatrice.
//  */

let numbers = document.getElementsByClassName('number')
let operateur = document.getElementsByClassName('operateur')

let result = document.getElementById('result')
let div = document.getElementById('prompt')

let clean = document.getElementById("delete")

console.log(numbers, operateur, result)

let num0 = "";
let num1 = "";

let currOpe = ""

let currentNumber = 0

console.log(div)


for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener("click", function() {

        if (currentNumber == 0) {

            num0 += numbers[i].innerHTML
            console.log(numbers[i].innerHTML)
            div.innerHTML = num0


        }
        else {

            num1 += numbers[i].innerHTML
            console.log(numbers[i].innerHTML)
            div.innerHTML = num0 + currOpe + num1


        }
    })
}


for (let i = 0; i < operateur.length; i++) {
    console.log(operateur[i])

    operateur[i].addEventListener("click", function() {


        currOpe = operateur[i].innerHTML
        div.innerHTML = num0 + currOpe


        console.log(currOpe)
        currentNumber = 1


    })
}


result.addEventListener("click", function() {


    div.innerHTML = eval(num0 + currOpe + num1);

})

clean.addEventListener("click", function() {


    num0 = "";
    num0 = "";
    currOpe = "";
    currentNumber = 0
    div.innerHTML="nothing"
})