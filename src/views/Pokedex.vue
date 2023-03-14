<template>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Document</title>
      </head>
      <body>
        <header>
          <section>
            <div class="principale">
              <ul>
                <li id="play"><router-link class="site" to="play">Play</router-link></li>
                <li class="active"><router-link class="site" to="pokedex">Pokedex</router-link></li>
                <li><router-link class="site" to="score">Score</router-link></li>
                <li><router-link class="site" to="login">Log In</router-link></li>
                <li><router-link class="site" to="signup">Sign Up</router-link></li>

              </ul>
            </div>
          </section>
        </header>
        <div id="pokedex-zone">
        <h1>Pokedex</h1>
        <p id="pokedex-description">
          Welcome to your Pokedex! Here, you can access information on all kinds of Pokemon!
        </p>
        <div class="ruban" id="ruban1">
          <img class="pokemon-image" src="../assets/Shuffle001.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Bulbasaur</h4>
          <p class="pokemon-description">Innocent and carefree, Bulbasaur loves to wander around on its own. However, the problem is that it doesn't always realize the dangers around it and sometimes ends up getting lost in hazardous places, such as a volcano! Help it avoid the fire attacks of wild Pokémon! It's really hot and burning!</p>
          </div>
        </div>
    
        <div class="ruban" id="ruban4">
          <img class="pokemon-image" src="../assets/Shuffle004.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Charmander</h4>
          <p class="pokemon-description">Charmander is a shy creature that doesn't like much. However, it's very popular among its peers who would love to give it hugs. With its pretty flaming tail and its tough-guy attitude, Charmander is a true CHAD in its neighborhood!</p>
          </div>
        </div>
        
        <div class="ruban" id="ruban7">
          <img class="pokemon-image" src="../assets/Shuffle007.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Squirtle</h4>
          <p class="pokemon-description">Squirtle is quite carefree because it believes its shell is the strongest on the planet! But despite its tough-guy appearance, Squirtle is a cute creature that loves to eat bubbles! Splash!</p>
          </div>
        </div>
        <div class="ruban" id="ruban10">
          <img class="pokemon-image" src="../assets/Shuffle010.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Caterpie</h4>
          <p class="pokemon-description">Caterpie doesn't have many friends... It's always been rejected in its life. That's why it can be a bit clingy and won't hesitate to touch you without your consent... Be careful not to touch it because it can sting you despite its innocent appearance!</p>
          </div>
        </div>
        <div class="ruban" id="ruban13">
          <img class="pokemon-image" src="../assets/Shuffle013.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Weedle</h4>
          <p class="pokemon-description">Weedle is much more popular than its cousin Caterpie. However, it tends to break down people who approach it. Indeed, toxic relationships are something it's familiar with! Don't even try to squash it! Run away instead!</p>
          </div>
        </div>
        <div class="ruban" id="ruban19">
          <img class="pokemon-image" src="../assets/Shuffle019.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Rattata</h4>
          <p class="pokemon-description">Rattata is a creature that has always been chased and persecuted because it's "dirty" according to most people. That's why it has a speed that should absolutely not be underestimated!</p>
          </div>
        </div>
      </div>

        <footer>
          
        </footer>
      </body>
    </html>
  </template>
  

  
  <style>
  #pokedex-zone {
  margin: 1.5cm;
  height: 100cm;
  background-color: rgb(214, 214, 214, 0.7);
}
  #pokedex-description{
    font-size: 25px;
    margin-top: 20px;
  }
  .ruban {
  display: flex; /* Utilisation de Flexbox pour centrer les éléments */
  align-items: center; /* Centrage vertical */
  height: 200px;
  background-color: rgba(105, 107, 106, 0.635);
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 20px;
}
#ruban1{
  background-color: #9be7c1;
}
#ruban4{
  background-color: #ffc562;
}
#ruban7{
  background-color: #80dce9;
}
#ruban10, #ruban13{
  background-color: #c8d44b;
}
#ruban19{
  background-color: #a7a7a7;
}
.pokemon-image{
  height: 200px;
  width: 200px;
  transition: transform 3s;
}
.pokemon-image:hover{
  transform: rotate(360deg);
}
.pokemon-text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
  max-width: calc(100% - 220px);
}
.pokemon-name{
  font-size: 30px;
  margin: 0 0 10px 0; /* positionne le titre en haut de la div2 */
}
.pokemon-description{
  font-size: 20px;
}



@media (max-width: 1000px) {
  .pokemon-description {
    display: none;
  }
}
@media (max-width: 700px) {
  .pokemon-name {
    display: none;
  }
}
</style>


<script>
export default {
  name: "DStyleBindings",
  data() {
    return {
      is_square1_red: false,
      is_square1_blue: false,
      is_square2_rotated: false,
      someColor: "gray",
    };
  },
};
</script>