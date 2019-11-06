//chosit un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let carre = document.getElementById("carre");
let ennemi1 = document.getElementById("ennemi1");
let ennemi2 = document.getElementById("ennemi2");
let ennemi3 = document.getElementById("ennemi3");
let ennemi4 = document.getElementById("ennemi4");

// fonction qui permet de bouger un élément dans une direction
function move(element, direction) {
  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  switch (direction) {
    case "bas":
      top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      if (top_element < 650) {
        top_element += 50;
        element.style.top = top_element + "px";
      }
      break;
    case "haut":
       top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      if (top_element > 0) {
        top_element -= 50;
        element.style.top = top_element + "px";
      }
      break;
    case "droite":
      left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );
      if (left_element < 650) {
        left_element += 50;
      element.style.left = left_element + "px";
      }
      break;
    case "gauche":
      left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );
      if (left_element > 0) {
        left_element -= 50;
      element.style.left = left_element + "px";
      }
      break;
  }
}

// event listener pour écouter les touches du clavier, et bouger le carré en fonction de ces touches
window.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    //haut
    case 38:
      //code quand on va en haut
      move(carre, "haut");
      break;

    //droite
    case 39:
      //code quand on va à droite
      move(carre, "droite");
      break;

    //bas
    case 40:
      move(carre, "bas");
      //code quand on va à bas
      break;

    //gauche
    case 37:
      //code quand on va à gauche
      move(carre, "gauche");
      break;
  }
});

// faire bouger l'ennemi dans une direction aléatoirement
setInterval(function(){
  let random = getRandomInt(4);
switch (random) {
  case 0:
    if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("top")) === 0){
      move(ennemi1, "bas");
    }
    else{
      move(ennemi1, "haut");
    }
    break;
    case 1:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("top")) === 650){
          move(ennemi1, "haut");
        }
        else{
          move(ennemi1, "bas");
        }
    break;
    case 2:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("left")) === 0){
          move(ennemi1, "droite");
        }
        else{
          move(ennemi1, "gauche");
        }
    break;
    case 3:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("left")) === 650){
          move(ennemi1, "gauche");
        }
        else{
          move(ennemi1, "droite");
        }
    break;
}
},1000)

setInterval(function(){
  let random = getRandomInt(4);
switch (random) {
  case 0:
    if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 0){
      move(ennemi2, "bas");
    }
    else{
      move(ennemi2, "haut");
    }
    break;
    case 1:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 650){
          move(ennemi2, "haut");
        }
        else{
          move(ennemi2, "bas");
        }
    break;
    case 2:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 0){
          move(ennemi2, "droite");
        }
        else{
          move(ennemi2, "gauche");
        }
    break;
    case 3:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 650){
          move(ennemi2, "gauche");
        }
        else{
          move(ennemi2, "droite");
        }
    break;
}

},1000)
setInterval(function(){
  let random = getRandomInt(4);
switch (random) {
  case 0:
    if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 0){
      move(ennemi3, "bas");
    }
    else{
      move(ennemi3, "haut");
    }
    break;
    case 1:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 650){
          move(ennemi3, "haut");
        }
        else{
          move(ennemi3, "bas");
        }
    break;
    case 2:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 0){
          move(ennemi3, "droite");
        }
        else{
          move(ennemi3, "gauche");
        }
    break;
    case 3:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 650){
          move(ennemi3, "gauche");
        }
        else{
          move(ennemi3, "droite");
        }
    break;
}

},1000)
setInterval(function(){
  let random = getRandomInt(4);
switch (random) {
  case 0:
    if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 0){
      move(ennemi4, "bas");
    }
    else{
      move(ennemi4, "haut");
    }
    break;
    case 1:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 650){
          move(ennemi4, "haut");
        }
        else{
          move(ennemi4, "bas");
        }
    break;
    case 2:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 0){
          move(ennemi4, "droite");
        }
        else{
          move(ennemi4, "gauche");
        }
    break;
    case 3:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 650){
          move(ennemi4, "gauche");
        }
        else{
          move(ennemi4, "droite");
        }
    break;
}
},1000)