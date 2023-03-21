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
      <div v-if="loginVisible" class="overlay"></div>
      <div class="content-container" :class="{ blurred: loginVisible }">
        <!-- Contenu de votre page ici -->
        <div class="tete">
          <section>
            <div class="principale">
              <ul>
                <li id="play">
                  <router-link class="site" to="play">Play</router-link>
                </li>
                <li>
                  <router-link class="site" to="pokedex">Pokedex</router-link>
                </li>
                <li>
                  <router-link class="site" to="score">Score</router-link>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div id="text-zone">
          <h1>Play</h1>

          <div class="ruban-jeu" id="jeu1">
            <img
              class="pokemon-image"
              src="../assets/Shuffle001.png"
              alt="Description de l'image"
            />
            <div class="pokemon-text">
              <router-link class="site" to="squirtgame">
                <h4 class="pokemon-name">BulbaPlay</h4>
              </router-link>
              <p class="pokemon-description">Play with Bulbasaur!</p>
            </div>
          </div>

          <div class="ruban" id="ruban4">
            <img
              class="pokemon-image"
              src="../assets/Shuffle004.png"
              alt="Description de l'image"
            />
            <div class="pokemon-text">
              <router-link class="site" to="squirtgame">
                <h4 class="pokemon-name">Gamender</h4>
              </router-link>
              <p class="pokemon-description">Play with Charmander!</p>
            </div>
          </div>

          <div class="ruban" id="ruban7">
            <img
              class="pokemon-image"
              src="../assets/Shuffle007.png"
              alt="Description de l'image"
            />
            <div class="pokemon-text">
              <router-link class="site" to="squirtgame">
                <h4 class="pokemon-name">Squirtle's Aquatic Adventure</h4>
              </router-link>
              <p class="pokemon-description">Play with Squirtle!</p>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </body>
  </html>
</template>
  
  <script>
export default {
  name: "PlayVue",
  data() {
    return {
    };
  }}

</script>
