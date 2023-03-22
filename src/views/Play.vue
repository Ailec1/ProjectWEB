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
      <div class="content-container">
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

          <div class="rubane" id="ruban-bulbizarre">
            <img
              class="pokemon-image"
              src="../assets/Shuffle001.png"
              alt="Description de l'image"
            />
            <div class="pokemon-text">
              <router-link class="site" to="squirtgame">
                <h4 class="pokemon-name">
                  <a>BulbaPlay</a>
                </h4>
              </router-link>
              <p class="pokemon-description">Play with Bulbasaur!</p>
            </div>
          </div>
          
          <div class="rubane" id="ruban-salameche">
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
      

          <div class="rubane" id="ruban-carapuce">
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
      <!-- <div class="test-card">
          <game-card
            v-for="game in games"
            :game="game"
            :key="game.id"
          />
      </div> -->
      



      <footer></footer>
    </body>
  </html>
</template>
  
  <script>
  // import GameCard from '@/components/GameCard.vue';
export default {
  name: "PlayComponent",
  components:{
    // GameCard
  },
  data() {
    return {
      // games:[
      //   {
      //     title:"BulbaPlay",
      //     pokemon:"Bulbasaur",
      //     description:"d",
      //     routerLink:"/squirtgame"
      // },
      // {
      //     title:"BulbaPlay",
      //     pokemon:"Bulbasaur",
      //     description:"d"
      // },
      // {
      //     title:"BulbaPlay",
      //     pokemon:"Bulbasaur",
      //     description:"d"
      // },
      // ]
    };
  }}

</script>

<style>
a{
  text-decoration: none;
}
#ruban-bulbizarre{
  background-color: #75dea9;
}
#ruban-salameche{
  background-color: #ff7d45;
}
#ruban-carapuce{
  background-color: #7b93e5;
}
.pokemon-text{
  text-decoration: none;
}

.rubane {
  display: flex; 
  align-items: center;
  height: 250px;
  background-color: rgba(105, 107, 106, 0.635);
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
  border-radius: 40px;
}
</style>