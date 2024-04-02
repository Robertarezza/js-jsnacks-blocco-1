//test
//alert("Ciao")

let userNumber = parseInt(prompt("Inserisci un numero:"));

console.log("I cubi dei primi", userNumber, "numeri sono:");

for (let i = 1; i <= userNumber; i++) {
    let cubo = Math.pow(i, 3);
    
    console.log("Il cubo di", i, "è", cubo);
}
