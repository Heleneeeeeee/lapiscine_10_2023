// //REVISION
// let arrExample = [3, 5, 8, 12, 2, 43, 21, 48]

// // let readFirstElement = true;

// // if(!readFirstElement) {
// //     // console.log(arrExample[0])
// // } else {
// //     // console.log(arrExample[1])
// // }

// // console.log(arrExample[2])

// // let index

// // if(readFirstElement) {
// //     index=2
// // } else {
// //     index=4
// // }

// // console.log(arrExample[index])

// // let objExample= {
// //     prop1:6,
// //     prop2:3,
// // }

// // console.log(arrExample[arrExample.length - 1])

// // Récupérer l'élément du tableau placé au milieu du tableau à l'aide de la propriété .lenght du tableau

// let middleIndex = Math.round(arrExample.length / 2);


// // if (arrExample.length % 2 == 0) {
// //     middleIndex = arrExample.length / 2
// // } else {
// //     middleIndex = (arrExample.length - 1) / 2
// // }

// let elementInTheMiddle = arrExample[middleIndex]

// console.log(arrExample)

// //METHODE POUR AJOUTER UN ELEMENT A LA FIN DU TABLEAU
// arrExample.push(51, 21, 24)

// console.log(arrExample)

// //METHODE POUR ENLEVER LE DERNIER ELEMENT DU TABLEAU
// arrExample.pop()

// console.log (arrExample)

let administrators = ['Paul', 'Pierre', 'Mathilde']
//Avant chaque ajout d'administarteur dans le tableau, tester si le nombre d'administrateurs est supérieur ou égal à 4, si c'est le cas, on enlève le dernier élément pour ajouter simplement le nouvel administrateur.

// let newAdmin1 = 'Marianne'
// let newAdmin2 ='Sophie'
// let newAdmin3 ='Lucie'

// if (administrators.length >= 4) {
//     administrators.pop()
// } 
//     administrators.push(newAdmin1)

// // administrators.push(newAdmin1)



// if (administrators.length >= 4) {
//     administrators.pop()
// } 
//     administrators.push(newAdmin2)
// // administrators.push(newAdmin2)



// if (administrators.length >= 4) {
//     administrators.pop()
// } 
//     administrators.push(newAdmin3)

// // administrators.push(newAdmin3)

// // Consigne : ajouter Marianne dans le tableau administrators
// console.log (administrators)
 //Ajouter utilisateur si la proprieté admin est true

let newAdmin1 = {
    name:'Marianne',
    admin:true
}

let newAdmin2 = {
    name:'Sophie',
    admin:false
}

let newAdmin3 = {
    name:'Lucie',
    admin:true
}

// if (newAdmin1.admin) {
// administrators.push(newAdmin1.name)
// }

// if (newAdmin2.admin) {
// administrators.push(newAdmin2.name)
// }

// if(newAdmin3.admin) {
// administrators.push(newAdmin3.name)
// }
// //Exécution de fonction
// addUserIfAdmin(newAdmin1)
// addUserIfAdmin(newAdmin2)
// addUserIfAdmin(newAdmin3)

// //Déclaration de fonction
// function addUserIfAdmin (user) {
// if (user.admin) {
//     administrators.push (user.name)
// }
// }

// console.log(administrators)

// Créer une fonction en paramètre un objet utilisateur et qui affiche en console "Bonjour ${nom} !"
// Ajouter une condition pour afficher Bonjour administratrice ...! si la propriété admin est true
// readNewUser(newAdmin1)
// readNewUser(newAdmin2)
// readNewUser(newAdmin3)

// // function readNewUser (user) {

// //     if (user.admin) {
// //  console.log(`Bonjour administratrice ${user.name} !`)
// // }
// // else {
// //     console.log(`Bonjour ${user.name} !`)
// // }
// // }

// function readNewUser (user) {
//     let strResult = `Bonjour `
    
//     if (user.admin) {
//      strResult += `administratrice `
//     }

//     strResult += user.name +'!'
//     console.log(strResult)
// }
// buildSentence (newAdmin2,newAdmin3)

// function buildSentence (user1, user2) {
// console.log(`Bonjour ${user1.name} et ${user2.name} !`)
// }

const town1 = {
    name:'Bordeaux',
    population: 300000,
    superficy: 50,
    twinnings: ['Berlin','Londres','Madrid','Libourne']
}

const town2 = {
    name:'Lyon',
    population: 500000,
    superficy: 48,
    twinnings: ['Berlin','Londres','Madrid','Libourne', 'Rennes','Varsovie']
}

const town3 = {
    name:'Paris',
    population: 2000000,
    superficy: 105,
    twinnings: ['Berlin','Londres','Madrid','Libourne', 'Rochefort']
}

//Ecrire une fonction qui prend 2 paramètres, et qui affiche dans la console, le nom de la ville la plus peuplée des deux

// compareTowns(town1,town2)
 
const biggerTwinnings = compareTowns (town1,town2)

console.log(biggerTwinnings)

function compareTowns (city1,city2) {
    if (city1.twinnings.length > city2.twinnings.length){
        return(city1.name)
    } else {
        return(city2.name)
    }
}



// function compareTowns (city1, city2) {
//     if (city1.population>city2.population){
//         console.log(city1.name);
//     } else {
//         console.log (city2.name);
//     }
// }
//  const biggerTown = compareTowns(town2,town3)

//  console.log (biggerTown.name)


// function compareTowns (city1, city2) {
//     if (city1.population > city2.population) {
//     return city1
//     } else {
//     return city2
//     }
// }




// function compareTowns (city1, city2) {
//     if (city1.population/ city1.superficy>city2.population/ city2.superficy){
//         console.log (city1.name)
//     } else {
//         console.log (city2.name)
//     }
// }

// Ecrire la fonction qui retourne la somme de 2 paramètres

// const nb1= 5
// const nb2 = 7

// const sum = addTwoParameters (nb1,nb2)

// console.log (`Le résultat de la somme de ${nb1} et ${nb2} est égal à ${sum}`)

// function addTwoParameters(arg1,arg2) {
//     const result= arg1 + arg2
//     return result
// //     // ou 
// //     return arg1 + arg2
// }  

// const val = 15;   // contexte global de la fonction

// const res = addValue(3)

// console.log(res)

// function addValue (param) {
//     return param + val;   //contexte local de la fonction 
//                          // Ok pour aller du global vers le local
// }

//Ecrire la fonction qui retourne le produit des 2 paramètres

const resultProduct = productOfParameters (4,6)

// console.log(resultProduct)

function productOfParameters (a,b) {
    return a * b
}
