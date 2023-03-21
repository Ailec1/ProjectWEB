<template>
  <!DOCTYPE html>
  <html lang="en">
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
      <div id="squirt-zone">
        <!-- <h1>Squirtle's Aquatic Adventure</h1> -->
        <div>
          <iframe id="squirtgame" src="game/Project.html" frameborder="0"></iframe>
        </div>
      </div>
      <footer></footer>
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

<style scoped>
  #squirtgame{
    height: 700px;
  width: 1350px;
  margin-top: 20px;
  }
  #squirt-zone{
    margin: 1.5cm;
  height: 22cm;
  background-color: rgb(214, 214, 214, 0.7);
  }
</style>