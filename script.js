$(document).ready(function() {
  //fonction Start
  function start(){
    console.log('heelo');
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
        carre.style.background = "URL('img/hero/hero_haut.gif')"
        break;

        //droite
        case 39:
        //code quand on va à droite
        move(carre, "droite");
        carre.style.background = "URL('img/hero/hero_droite.gif')"
        break;

        //bas
        case 40:
        move(carre, "bas");
        carre.style.background = "URL('img/hero/hero_bas.gif')"
        //code quand on va à bas
        break;

        //gauche
        case 37:
        //code quand on va à gauche
        move(carre, "gauche");
        carre.style.background = "URL('img/hero/hero_gauche.gif')"
        break;
      }
    });

    window.addEventListener("keyup", function(event) {
      switch (event.keyCode) {
        //haut
        case 38:
        //code quand on va en haut

        carre.style.background = "URL('img/hero/hero_fixe_haut.png')"
        break;

        //droite
        case 39:
        //code quand on va à droite

        carre.style.background = "URL('img/hero/hero_fixe_droite.png')"
        break;

        //bas
        case 40:

        carre.style.background = "URL('img/hero/hero_fixe_bas.png')"
        //code quand on va à bas
        break;

        //gauche
        case 37:
        //code quand on va à gauche

        carre.style.background = "URL('img/hero/hero_fixe_gauche.png')"
        break;
      }
    });

    // faire bouger l'ennemi dans une direction aléatoirement
    // Ennemi n°1
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("top")) === 0){
          move(ennemi1, "bas");
          ennemi1.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi1, "haut");
          ennemi1.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("top")) === 650){
          move(ennemi1, "haut");
          ennemi1.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi1, "bas");
          ennemi1.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("left")) === 0){
          move(ennemi1, "droite");
          ennemi1.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi1, "gauche");
          ennemi1.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("left")) === 650){
          move(ennemi1, "gauche");
          ennemi1.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi1, "droite");
          ennemi1.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }
    },1000)
// Ennemi n°2
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 0){
          move(ennemi2, "bas");
          ennemi2.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi2, "haut");
          ennemi2.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 650){
          move(ennemi2, "haut");
          ennemi2.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi2, "bas");
          ennemi2.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 0){
          move(ennemi2, "droite");
          ennemi2.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi2, "gauche");
          ennemi2.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 650){
          move(ennemi2, "gauche");
          ennemi2.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi2, "droite");
          ennemi2.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }

    },1000)
    // Ennemi n°3
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 0){
          move(ennemi3, "bas");
          ennemi3.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi3, "haut");
          ennemi3.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 650){
          move(ennemi3, "haut");
          ennemi3.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi3, "bas");
          ennemi3.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 0){
          move(ennemi3, "droite");
          ennemi3.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi3, "gauche");
          ennemi3.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 650){
          move(ennemi3, "gauche");
          ennemi3.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi3, "droite");
          ennemi3.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }

    },1000)
    // Ennemi n°4
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 0){
          move(ennemi4, "bas");
          ennemi4.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi4, "haut");
          ennemi4.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 650){
          move(ennemi4, "haut");
          ennemi4.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi4, "bas");
          ennemi4.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 0){
          move(ennemi4, "droite");
          ennemi4.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi4, "gauche");
          ennemi4.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 650){
          move(ennemi4, "gauche");
          ennemi4.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi4, "droite");
          ennemi4.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }
    },1000)

    // fonction invulnérabilité et vies du héros
    let cooldown_hit = 0;
    let vie = 3;
    function contact_enemy() {
      let enemy_temp = document.getElementsByClassName('enemy');
      for (let i = 0; i < enemy_temp.length; i++) {
        let hero_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
        let hero_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
        let hero_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
        let hero_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
        let hero_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
        let hero_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
        let enemy_pos_left = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("left"));
        let enemy_pos_bottom = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("bottom"));
        let enemy_width = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("width"));
        let enemy_height = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("height"));
        let enemy_pos_right = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("right"));
        let enemy_pos_top = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("top"));
        if (hero_pos_top === enemy_pos_top && hero_pos_top === enemy_pos_top && hero_x === enemy_pos_left && hero_x === enemy_pos_left) {
          if (cooldown_hit == 0) {
            cooldown_hit = 1;
            let affiche_cd = document.getElementsByClassName('affiche-cd');
            function affiche_gmod(){
              affiche_cd[1].classList.remove('dis-none');
            }
            affiche_gmod()
            setTimeout(function(){
              cooldown_hit = 0;
              affiche_cd[1].classList.add('dis-none');
            },500)
            console.log('touché')
            
            if(cooldown_hit = 1){
              vie -= 1;
              console.log(vie);
              if(vie == 0){
                console.log('game over')
                let retry_screen = document.getElementById('retry-screen');
                retry_screen.classList.remove('dis-none')
              }
            }
          }
        }
      }

    }
    setInterval(function () {
      contact_enemy()
    },100)


// fonction utiliser bombe 
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

// Hitbox de la bombe aux ennemis
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
                console.log('gg')
                enemy_temp[i].remove();

              }
            }
          }
        }
// fonction hitbox de la bombe au héros
        hitbox();
        function hitbox_hero(){
          for (var i = 0; i < ex2value.length; i++) {
            let hero_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
            let hero_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
            let hero_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
            let hero_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
            let hero_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
            let hero_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
            console.log(hero_pos_top, hero_x, hero_y, hero_pos_right, hero_width, hero_height)
            let ex2_pos_left = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("left"));
            let ex2_pos_bottom = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("bottom"));
            let ex2_width = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("width"));
            let ex2_height = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("height"));
            let ex2_pos_right = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("right"));
            let ex2_pos_top = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("top"));
            console.log(ex2_width, ex2_height);
            if (hero_pos_top < ex2_pos_top + ex2_width && hero_pos_top + hero_width > ex2_pos_top && hero_x < ex2_pos_right + ex2_height && hero_height + hero_x > ex2_pos_right) {
              console.log('go');
            }
          }
        }
        hitbox_hero()
        setTimeout(function(){
          explosion.remove()
        },500)
      },1000)

    }

    // afficher la bombe

    let ie = 0;
    let cooldown_keyboard = 0;
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 32) {
        if (cooldown_keyboard == 0) {
          cooldown_keyboard = 1;
          let affiche_cd = document.getElementsByClassName('affiche-cd');
          function affiche_bomb_drop(){
            affiche_cd[0].classList.remove('dis-none');
          }
          affiche_bomb_drop()
          setTimeout(function(){
            cooldown_keyboard = 0;
            affiche_cd[0].classList.add('dis-none');
          },500)
          if (ie < 3) {
            ie += 1;
            drop_bomb();
          }
        }

      }
      console.log(cooldown_keyboard);

    })
// Nouvel fonction
    function endgame() {
      let numberenemy = document.getElementsByClassName('enemy')
      console.log('fuck');

      for (let i = 0; i < numberenemy.length; i++) {
        console.log('hi');
        if (numberenemy.length == 1) {
          console.log(numberenemy);
          let win_screen = document.getElementById('win-screen');
          win_screen.classList.remove('dis-none')
        }

      }


    }
    setInterval(function () {
      endgame()
    },50)
  };

  // Bouton start

  let start_butn = document.getElementById('start-button');
  start_butn.addEventListener('click',function(){
    let start_screen = document.getElementById('start-screen');
    start_screen.classList.add('dis-none');
    start()
  });
})

// Bouton pour rafraichir la page

function refresh() {
   window.location.reload(false); }

// 

