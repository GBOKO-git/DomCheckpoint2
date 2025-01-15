//alert('hello');
// selection du boutton
changeColor = document.getElementById("change-color-btn");
// selection du box-color
colorBox = document.getElementById("color-box");
//ajout d'evenement au click sur le boutton. 
changeColor.addEventListener('click', function(){
   colorBox.style.backgroundColor = getRandomColor();
  /* changeColor.style.color = getRandomColor(); 
   possibilité changer la couleur du trxt de notre 
   bouton*/
});
/* notre fonction mour generer les couleur 
aleatoirement en utilisant l'hexadrcimal'*/
function getRandomColor(){
   let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
   return color;
};
/*explication du code
 * Math.floor arrondit en entier
 * Math.random genere un nombre aleatoireventre 0 et 1
 * Math.random() * 16777215 genere un nombre aleatoire entre 0 et 16777215
 * toSting(16) transforme en chaine de caractere sur la base 16
 * */
 