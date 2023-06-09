const nomeUtente = prompt ('Inserisci nome utente');

console.log(nomeUtente, typeof nomeUtente);

document.getElementById('my-p').innerHTML = nomeUtente ;



const yourAge = prompt ('Inserisci la tua età');

console.log(yourAge, typeof yourAge);

document.getElementById('my-p').innerHTML = yourAge ;


const favColor = prompt('Qual è il tuo colore preferito?');

console.log(favColor, typeof favColor);

document.getElementById('my-p').innerHTML = favColor;


const generalInfo = document.getElementById('my-p');

generalInfo.innerHTML = nomeUtente + '' + yourAge + '' + favColor + '' + '101'