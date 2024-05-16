//!Palindroma
const userWord = prompt('Scrivi una parola');

function palindromo(parola) {
    let portionA = '';
    let portionB = '';
    if (parola.length % 2 == 0) {
        let metaLunghezza = parola.length / 2;
        for (let i = 0; i < parola.length; i++) {
            if (i < metaLunghezza) {
                portionA += parola[i]
            }
            else {
                portionB += parola[i]
            }
        }
    }

    else {
        let metaLunghezza = parola.length / 2 - 0.5;
        let portionBtemp = ''
        for (let i = 0; i < parola.length; i++) {
            if (i < metaLunghezza) {
                portionA += parola[i]
            }
            else {
                portionBtemp += parola[i]
            }
        };

        for (let i = 1; i < portionBtemp.length; i++){
            portionB += portionBtemp[i]
        }

        /* portionB = portionB.slice(1, portionB.length); */

    }

    /* console.log(portionA, portionB); */

    let portionBreversed = '';
    for (let j = portionB.length - 1; j >= 0; j--) {
        portionBreversed += portionB[j]
    }

    /* console.log(portionBreversed) */

    if (portionA == portionBreversed) {
        console.log('Parola Palindroma!!!', portionA, portionBreversed)
    }

    else {
        console.log('Parola non Palindroma...')
    }
}

palindromo(userWord)

//! Pari e Dispari

let sceltaUtenteRaw = prompt('Scegli Pari o Dispari?');

let sceltaUtente = sceltaUtenteRaw.toLowerCase();

while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    sceltaUtenteRaw = prompt('Scegli Pari o Dispari?');
    sceltaUtente = sceltaUtenteRaw.toLowerCase()
};

let numeroUtente = Number.parseInt(prompt('Scrivi un numero da 1 a 5'), 10);

while (numeroUtente < 1 || numeroUtente > 5) {
    numeroUtente = Number.parseInt(prompt('Scrivi un numero da 1 a 5'), 10);
};

console.log('Utente ', numeroUtente);

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let numeroComputer = getRandomNumber (1, 5);

console.log('Computer ', numeroComputer);

function somma (primoNumero, secondoNumero) {
    return primoNumero + secondoNumero
};

let sommaNumeri = somma (numeroUtente, numeroComputer);

console.log ('La somma dei numeri corrisponde a', sommaNumeri);

if (sommaNumeri % 2 == 0) {
    sommaNumeri = 'pari'
} 

else {
    sommaNumeri = 'dispari'
};

if (sceltaUtente === sommaNumeri) {
    console.log ('Hai Vinto!!! La tua scelta era',sceltaUtente)
}
else {
    console.log ('Hai Perso... La tua scelta era',sceltaUtente)
};