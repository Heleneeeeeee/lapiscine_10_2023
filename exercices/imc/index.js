// 1 On récupère la balise html et on la stocke dans une variable en js
const validationBtn = document.querySelector(".validation-btn")
const inputs = document.querySelectorAll('.bmi-input')
const resultIMC = document.querySelector ('.bmi-value')
// 2 On déclare un click sur le bouton, à chaque fois qu'on clique, on exécute la fonction associée
validationBtn.addEventListener('click', onBtnClick)

function onBtnClick() {
const height = inputs[0].value / 100
const weight = inputs[1].value
// afficher dans la console l'IMC => poids en kg / taille m² ** 2
    const bmi = weight /height ** 2
//vérifier les données utilisateur, pas de valeurs <=0
    resultIMC.textContent = bmi

    console.log(bmi)
}
