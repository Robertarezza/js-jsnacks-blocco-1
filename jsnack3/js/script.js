//test
//alert("ciao")

let numeri = [];


for (let i = 0; i < 6; i++) {
    const numero = parseInt(prompt(`Inserisci il ${i+1}° numero:`));
    
    if (numero % 2 !== 0){
        numeri.push(numero);
    }
    
   
}
console.log("I numeri inseriti sono:", numeri);
