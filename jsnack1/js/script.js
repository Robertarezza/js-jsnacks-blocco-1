//test
//alert("ciao")




let somma = 0;

for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Inserisci il ${i+1}° numero:`));
   
    somma += numero;
   
}

console.log("la somma dei numeri è :", somma );

