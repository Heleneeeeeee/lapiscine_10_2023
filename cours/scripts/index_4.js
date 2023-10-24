// let words = ['Salut', 'mon', 'ton', 'nom', 'est', 'Pierre']

// let sentence = ''
// let exceptions = []

// for (let n=0; 0 < words.length; n++) {
//     // les deux expressions suivantes sont strictement équivalentes
//     // sentence = sentence + words[n]                                                    // contexte de la boucle 
//     // sentence +=  words[n] 

//     // if (n != 2) {
//     // sentence += words[n] + ' '
//     // }

//     if (n == 2) {
//         exceptions.push(words[n])
//         // le mot clé "continue" permet de passer à l'itération suivante, le code qui suit ne sera donc pas exécuté
//         continue
//     }
//     sentence += words[n] 

//     if (n == words.length -1) {
//         sentence += '.'
//     }  else {
//         sentence += ' '
//     }
// } 
// console.log(sentence)

//---------------------------------------------------

const myTitle = document.querySelector(".my-title")

myTitle.addEventListener('click', onTitleClick)
// myTitle.textContent= "Hello new World"

function onTitleClick() {
    myTitle.textContent= "Hello new World !"
}