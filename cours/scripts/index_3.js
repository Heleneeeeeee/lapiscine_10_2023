// REVISION
// RETURN fait partie des fonctions

// Fonction = code automatisé

const monday ="lundi"
const tuesday = "mardi"

displayMessage(tuesday)                                     // lecture de la fonction tuesday = mardi

function displayMessage (jour){                             // Je déclare ma fonction
    let hello = "Salut"
    // console.log(`${hello} c'est ${jour}`)
}

const person_1 = {
    name: "Pierre",
    hasCar: true,
    hasBike: true,
    isSick:false,
}

const person_2 = {
    name: "Mélanie",
    hasCar: true,
    hasBike: false,
    isSick:false
}

const person_3 = {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick:false
}

const person_4 = {
    name: "Sophie",
    hasCar: false,
    hasBike: false,
    isSick:true
}
// Intégrer le paramètre person aux 2 fonctions pour rendre la chaîne de caractère dynamique

// canGoToUniversity(person_4)
// canGoToTopOfMountain(person_1) 

// Opérateur de comparaison complexe : OR
// function canGoToUniversity(person) {
//     if((person.hasCar || person.hasBike) && !person.isSick){
//         console.log(`${person.name} peut aller à l'université`) 
//     } else {
//         console.log(`${person.name} ne peut aller à l'université`)
//     }
// }

// // Opérateur de comparaison complexe : AND
// function canGoToTopOfMountain(person) {
//     if(person.hasCar && person.hasBike && !person.isSick){
//     console.log (`${person.name} peut aller au sommet de la montagne`)
//     } else {
//         console.log(`${person.name} ne peut aller à la montagne`)
//     }
// }

/***
 *  LES BOUCLES
 */

// for (let i = 1; i <= 10; i ++) {
//     console.log ('Salut' + i)
// }

// let arr = [3, 5, 12, 8, 1, 4]

// //Ajouter un if dans la boucle pour n'afficher que les élements dont la valeur >=5

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] >= 5) {
//         //console.log ('Element courant: ' + arr[i])
//     }
//     if (arr[i] % 3 == 0) {
//         console.log ('Element courant: ' + arr[i])  
//     }
// }

let numbers = [3, 5, 12, 8, 1, 4]

// Ecrire une boucle for pour additionner tous les éléments d'un tableau

let sum = 0

for (let i =0; i < numbers.length; i++ ){
    sum += numbers[i]
}
// console.log (sum)

// A l'aide d'une boucle for, trouver la valeur la plus grande dans le tableau

let max = 0

// for (let i = 0; i < numbers.length; i++ ){
//     if (numbers[i] > max) {
//         max = numbers [i]
//     }
// }
// console.log (max);

// Afficher uniquement les nombres strictement supérieurs à 4 ==> 5, 12, 8

// let filteredNumbers = []

// for (let ind = 0; ind < numbers.length; ind++ ) {
//     if (numbers [ind] > 4 ) {
//         filteredNumbers.push (numbers[ind])
//     }
// }

// console.log (filteredNumbers)
//Encapsuler le script précédent dans une fonction et y ajouter le paramètre limit

// const arrayResult = filterArray (4)

// // console.log (arrayResult)

// function filterArray (limit) {
//     let filteredNumbers = []
//     for (let ind = 0; ind < numbers.length; ind ++) {
//         if (numbers [ind] > limit) {
//             filteredNumbers.push (numbers[ind])
//         }
//     }
    // console.log (filteredNumbers)
    // return filteredNumbers
// }

// Ecrire une boucle for pour afficher dans un nouveau tableau toutes les personnes malades (isSick==0)

const persons = [{
    name: "Pierre",
    hasCar: true,
    hasBike: true,
    isSick:true
}, {
    name: "Mélanie",
    hasCar: true,
    hasBike: false,
    isSick:false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick:true
}, {
    name: "Sophie",
    hasCar: false,
    hasBike: false,
    isSick:false
}]

let sickPersons = []

for (let i = 0; i < persons.length; i++) {
    if (persons[i].isSick) {
        sickPersons.push (persons[i])
    }
}

// console.log (sickPersons)

// Difficulté supplémentaire, encapsuler la boucle dans une fonction et passer le tableau en paramètre

const result = findSickPeople(persons)
console.log (result);

function findSickPeople (arr) {
    let sickPersons = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isSick) {
            sickPersons.push (arr[i])
        }
    }
    return sickPersons;
}
