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