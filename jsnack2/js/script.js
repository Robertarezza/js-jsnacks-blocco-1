//test
//alert("Ciao")


const nameList = ["pippo", "peppe", "roberta", "francesco"];

const userName = prompt("Inserisci il tuo nome");

let trovato = false

for (let i = 0; i < nameList.length; i++) {
    //console.log(i);
    //condizioni
    if (userName == nameList[i]) {
        trovato = true  
        break;
    }
    
}


 //stampa
if(trovato == true){
    console.log("E' autorizzato ad accedere, il sito è in manutenzione")
}else {
    console.log("Non è autorizzato ad entrare")
}