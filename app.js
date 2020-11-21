const form = document.querySelector('.form-quizz');
let tableauResultats =  [];
const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2')
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];
//
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //recupération de la value (question a)
    //console.log(document.querySelector('input[name="q1"]:checked').value);
    for(let i = 1; i < 6; i++){
        //recupération de la var name de la question cochée
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats)
    tableauResultats = [];
    verifTableau = [];
});

function verifFunc(tabResultats){
    for (let a = 0; a <5; a++){
        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    //console.log(verifTableau);
    afficherResultats(verifTableau);
    couleurFonction(verifTableau);
    verifTableau = [];
};

function afficherResultats(tabCheck){
    const nbFautes = tabCheck.filter(el => el !==true).length; //bres de faute du quizz
    //console.log(nbFaute);
    switch(nbFautes){
        case 0 : 
            titreResultat.innerText = "✔️Bravo, c'est un sans faute !✔️";
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
        break;
        case 1 : 
        titreResultat.innerText = "✨ Vous y êtes presque !✨";
        aideResultat.innerText = 'Retentez un autres réponse dans les cases rouges, puis re-validez !';
        noteResultat.innerText = '4/5';
        break;
        case 2 : 
        titreResultat.innerText = "✨ Encore un effort ... 👀 ";
        aideResultat.innerText = 'Retentez un autres réponse dans les cases rouges, puis re-validez !';
        noteResultat.innerText = '3/5';
        break;
        case 3 : 
        titreResultat.innerText = "👀 Il reste quelques erreurs !😭";
        aideResultat.innerText = 'Retentez un autres réponse dans les cases rouges, puis re-validez !';
        noteResultat.innerText = '2/5';
        break;
        case 4 : 
        titreResultat.innerText = "😭 Peux mieux faire  !😭";
        aideResultat.innerText = 'Retentez un autres réponse dans les cases rouges, puis re-validez !';
        noteResultat.innerText = '1/5';
        break;
        case 5 : 
        titreResultat.innerText = "👎 Peux mieux faire !👎";
        aideResultat.innerText = 'Retentez un autres réponse dans les cases rouges, puis re-validez !';
        noteResultat.innerText = '0/5';
        break;
        default:
            'Wops, cas innatendu.';

    }
}

function couleurFonction(tabValBool){
    for(let j = 0; j <tabValBool.length; j++){
        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = "lightgreen";
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() =>{
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
  
}

toutesLesQuestions.forEach(item =>{
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})
