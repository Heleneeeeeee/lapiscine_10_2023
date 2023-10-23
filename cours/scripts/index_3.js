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

canGoToUniversity(person_4)
canGoToTopOfMountain(person_1) 

// Opérateur de comparaison complexe : OR
function canGoToUniversity(person) {
    if(person.hasCar || person.hasBike && !person.isSick){
        console.log(`${person.name} peut aller à l'université`) 
    } else {
        console.log(`${person.name} ne peut aller à l'université`)
    }
}

// Opérateur de comparaison complexe : AND
function canGoToTopOfMountain(person) {
    if(person.hasCar && person.hasBike && !person.isSick){
    console.log (`${person.name} peut aller au sommet de la montagne`)
    } else {
        console.log(`${person.name} ne peut aller à la montagne`)
    }
}