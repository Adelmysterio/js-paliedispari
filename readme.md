<!-- //! Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma -->

creo un prompt 'inserisci una parola'
creo una funzione con un argomento parola

    inizializzo portionA

    inizializzo portionB

    se la lunghezza della parola e' pari 
        dichiaro metaLunghezza = parola.length / 2
        creo un ciclo for scorra i caratteri della parola
        se indice del ciclo <= metaLunghezza allora portionA = ai caratteri della parola fino a indice <= metalunghezza
        altrimenti portionB = ai caratteri della fino a indice > metalunghezza

    se la lunghezza della parola e' dispari
        dichiaro metaLunghezza = (parola.length / 2) - 1
        creo un ciclo for scorra i caratteri della parola
        se indice del ciclo <= metaLunghezza allora portionA = ai caratteri della parola fino a indice <= metalunghezza
        altrimenti portionB = ai caratteri della fino a indice > metalunghezza


    
    
    inizializzo portionBreversed

    Creo un ciclo for che scorra i caratteri di portionB al contrario
        portionBreversed = ai caratteri della parola fino a indice
        

    se portionaA=portionBreversed allora la parola e' palindroma
    altrimenti no

<!--//! Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. -->
dichiaro la variabile sceltaUtente con un prompt che faccia scegliere Pari o dispari
imposto un controllo sul prompt


dichiaro la variabile numeroUtente con un prompt Scrivi un numero da uno a 5 
Imposto un controllo sul prompt

creo una funzione getRandomNumber che generi un numero random con un min e max 

dichiaro una variabile numeroComputer che invoca la funzione getRandomNumber con min 1 e max 5

creo una funzione somma con argomenti (primoNumero, secondoNumero) che restituisca la somma dei 2 argomenti

creo una variabile sommaNumeri che invoca la funzione somma con argomenti numeroUtente numeroComputer

se sommaNumeri % 2 = 0 allora sommaNumeri='pari'
altrimenti sommaNumeri='dispari'

se sceltaUtente === sommaNumeri allora stampa HAI VINTO
altrimenti stampa HAI PERSO






