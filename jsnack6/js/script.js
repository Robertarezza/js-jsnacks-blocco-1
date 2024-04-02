//test
//alert("Ciao")

let userNumber = prompt("Inserisci un numero di 4 cifre:");
let sum = 0;


    for (let i = 0; i < userNumber.length; i++) {
        let number = parseInt(userNumber[i]);
        sum += number;
    }

    console.log("La somma delle cifre è:", sum);

