let numeroKm = prompt("Numero di Km che vuoi percorrere") ;
console.log("Nmero di km che la persona vuole percorrere:", numeroKm)

let eta = prompt("Aggiungi la tua età in numero") ;
console.log("età della persona:", eta)

const prezzoBiglietto = 0.21 ;
console.log("Prezzo del biglietto a km:", prezzoBiglietto)

let km = parseInt(numeroKm);
let anni = parseInt(eta);

const euro = " &euro;"

// document.writeln( `${km + anni}`)

if ( km > 0 && anni > 0 )
    if (anni < 18)
    document.getElementById("prezzoFinale").innerHTML = (`${(Math.round(((km * prezzoBiglietto) * 80 / 100) * 100) / 100) + euro }`)
    else if ( anni > 65)
    document.getElementById("prezzoFinale").innerHTML =(`${(Math.round(((km * prezzoBiglietto) * 60 / 100) * 100) / 100) + euro}`)
    else
    document.getElementById("prezzoFinale").innerHTML =(`${(Math.round((km * prezzoBiglietto) * 100) / 100) + euro}`)
else
document.getElementById("prezzoFinale").innerHTML =("Compila tutti i campi!!")
