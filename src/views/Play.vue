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
              <li id="play">
                <router-link class="site" to="play">Play</router-link>
              </li>
              <li>
                <router-link class="site" to="pokedex">Pokedex</router-link>
              </li>
              <li><router-link class="site" to="score">Score</router-link></li>
              <li><router-link class="site" to="login">Log In</router-link></li>
              <li>
                <router-link class="site" to="signup">Sign Up</router-link>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <div id="text-zone">
        <h1>Play</h1>
        <div class="ruban" id="ruban1">
          <img class="pokemon-image" src="../assets/Shuffle001.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">BulbaPlay</h4>
          <p class="pokemon-description">Play with Bulbasaur!</p>
          </div>
        </div>
    
        <div class="ruban" id="ruban4">
          <img class="pokemon-image" src="../assets/Shuffle004.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Gamender</h4>
          <p class="pokemon-description">Play with Charmander!</p>
          </div>
        </div>
        
        <div class="ruban" id="ruban7">
          <img class="pokemon-image" src="../assets/Shuffle007.png" alt="Description de l'image">
          <div class="pokemon-text">
            <h4 class="pokemon-name">Squirtle's Aquatic Adventure</h4>
          <p class="pokemon-description">Play with Squirtle!</p>
          </div>
        </div>
      </div>
      <footer>
        
      </footer>
    </body>
  </html>
</template>
  
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


  

