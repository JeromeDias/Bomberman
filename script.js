$(document).ready(function() {
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

function drop_bomb() {
  let nuub_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
  let nuub_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
  let nuub_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
  let nuub_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
  let nuub_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
  let nuub_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
  let screen = document.getElementById('ecran');
  let bomba = document.createElement('div');
  bomba.classList.add('bombashit')
  screen.appendChild(bomba)
  bomba.style.left = nuub_x + "px";
  bomba.style.bottom = nuub_y + "px";
  setTimeout(function() {
    bomba.remove()
    ie -= 1;
  }, 1500);
  setTimeout(function () {
    let screen = document.getElementById('ecran');
    let explosion = document.createElement('div');
    explosion.classList.add('explosion');
    screen.appendChild(explosion);
    explosion.style.left = nuub_x + "px";
    explosion.style.bottom = nuub_y + "px";
    explosion.classList.add('ex2');
    let ex2value = document.getElementsByClassName('ex2');
    let enemy_temp = document.getElementsByClassName('enemy');
    function hitbox_hero(){
      for (var i = 0; i < ex2value.length; i++) {
        let hero_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
        let hero_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
        let hero_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
        let hero_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
        let hero_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
        let hero_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
        let ex2_pos_left = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("left"));
        let ex2_pos_bottom = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("bottom"));
        let ex2_width = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("width"));
        let ex2_height = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("height"));
        let ex2_pos_right = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("right"));
        let ex2_pos_top = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("top"));
        console.log(ex2_width, ex2_height);
        if (hero_pos_top < ex2_pos_top + ex2_width && hero_pos_top + hero_width > ex2_pos_top && hero_x < ex2_pos_right + ex2_height && hero_height + hero_x > ex2_pos_right) {
          console.log('game over');
    }}}
    hitbox_hero()
    function hitbox(){
        for (var i = 0; i < ex2value.length; i++) {
          ex2value[i].style.left = nuub_x - 50 + "px";
          ex2value[i].style.bottom = nuub_y - 50 + "px";
          let ex2_pos_left = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("left"));
          let ex2_pos_bottom = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("bottom"));
          let ex2_width = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("width"));
          let ex2_height = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("height"));
          let ex2_pos_right = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("right"));
          let ex2_pos_top = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("top"));
          console.log(ex2_width, ex2_height);
          for (var i = 0; i < enemy_temp.length; i++) {
            let enemy_pos_left = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("left"));
            let enemy_pos_bottom = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("bottom"));
            let enemy_width = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("width"));
            let enemy_height = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("height"));
            let enemy_pos_right = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("right"));
            let enemy_pos_top = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("top"));
            console.log(ex2_pos_left, enemy_pos_left, ex2_pos_bottom, enemy_pos_bottom, ex2_pos_top, enemy_pos_top, ex2_pos_right, enemy_pos_right);
            if (enemy_pos_top < ex2_pos_top + ex2_width && enemy_pos_top + enemy_width > ex2_pos_top && enemy_pos_left < ex2_pos_left + ex2_height && enemy_height + enemy_pos_left > ex2_pos_left) {
              
          
            }
          }
        }
    }
        //  if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
    hitbox();
    setTimeout(function(){
        explosion.remove()
      },500)
    },1000)

}
let ie = 0;
let cooldown_keyboard = 0;
  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) {
      if (cooldown_keyboard == 0) {
        cooldown_keyboard = 1;
        setTimeout(function(){
          cooldown_keyboard = 0;
        },500)
        if (ie < 3) {
          ie += 1;
          drop_bomb();
        }
      }

    }
    console.log(cooldown_keyboard);
  })


})
