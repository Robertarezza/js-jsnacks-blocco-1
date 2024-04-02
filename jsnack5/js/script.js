//test
//alert("ciao")

for (let i = 1; i <= 10; i++) {
    let potenza = Math.pow(2, i);
    if (potenza <= 1000) {
        console.log(potenza);
    } else {
        break; // Esci dal ciclo se la potenza supera 1000
    }
}
