/*
ESERCIZIO 1 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


/*
const userWord = prompt('Inserisci una parola');
let newWord = "";

for ( i = 0;  i < word.length; i++){
    newWord += word[i]
}

for ( i = userWord.length -1; i >= 0; i --){
    if(userWord === word){
        console.log('La parola è palindroma')
    } else {
        console.log('La parola non è palindroma')
    }

}

*/

/*
ESERCIZIO 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


const playerOddOrEven = prompt('Scegliere pari o dispari');
console.log('Tipo di numero giocatore:', playerOddOrEven);

const playerNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Numero giocatore', playerNumber);

const random = getRandomNumberPc(1,5);
console.log('Numero pc', random);

const total = playerNumber + random;
console.log('Totale', total); 


function getRandomNumberPc(min, max){     // min:1 max:5
    const range = max-min;
    const random = Math.floor(Math.random()* range);
    const result = random;

    return result;
}

function isOddOrEven(total){
    if (total % 2 === 0){
        return 'pari'
    } 
    return 'dispari'
}

const oddOrEven = isOddOrEven(total);
console.log('oddOrEven', oddOrEven);


if(oddOrEven===playerOddOrEven ){
    console.log('Vince il giocatore')
} else {
    console.log('Vince il pc')
}

