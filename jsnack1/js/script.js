//test
//alert("ciao")





let numeri = [];
let somma = 0;

for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Inserisci il ${i+1}° numero:`));
    numeri.push(numero);
    somma += numero;
   
}
//console.log("I numeri inseriti sono:", numeri);
console.log("la somma dei numeri è :", somma );