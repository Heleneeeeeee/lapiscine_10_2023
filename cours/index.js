// Présentation des opérateurs arithmétiques

/* 
Commentaires sur plusieurs lignes
*/

// LES NOMBRES

/**
 * Variante de commentaires sur plusieurs lignes
 **/
var myNumber1 = 9 + 2
var myNumber2 = 4

myNumber = 6

var myResult = myNumber1 * myNumber2

// console.log(myResult)


//Déclaration moderne (en ES6, javascript depuis 2015) de variables

const myNb1 = 9 //const qui ne change jamais
let myNb2 = 3  // let ce qui peut être modifié

// myNb2 += 5

const res = myNb1 * myNb2

// console.log(res)


//LES CHAINES DE CARACTERES (string) "" '' ``

let myName = `Je m'appelle "Paul"`
const lastname = `DOAZAN`
let age = 35;
let modifiedAge = age + 5

myName += ' ' + lastname


const resultStr = `${myName} et j'ai ${modifiedAge} ans.`

// console.log (resultStr)

//LES BOOLEENS
const myBoolean1 = true
const myBoolean2 = false

let myNb= 5

if (myBoolean1) {
    myNb += 7

}
let myAge= 18
const legalAge=21

const isMinor = myAge <= legalAge

const is30yearsOld = myAge==30 

if (isMinor) {
    // console.log (`Paul est mineur`)
}

if (!isMinor) {
    // console.log (`Paul n'est pas mineur`)
}

if (is30yearsOld){
    // console.log (`Paul a 30 ans`)
}else {
    // console.log (`Paul n'a pas 30 ans`)
}
// console.log(myNb)