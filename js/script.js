const userWord = prompt('Scrivi una parola');

function palindromo(parola) {
    let portionA = '';
    let portionB = '';
    let middle = '';
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
        for (let i = 0; i < parola.length; i++) {
            if (i < metaLunghezza) {
                portionA += parola[i]
            }
            else{
                portionB += parola[i]
            }
        };

       /*  for (let i = 1; i < portionB.length; i++){
            portionB += portionB[i]
        } */
        portionB = portionB.slice(1, portionB.length);

    }
    console.log(portionA, portionB)
}

palindromo(userWord)