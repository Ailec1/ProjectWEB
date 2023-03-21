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
      <div id="bulba-zone">
        <h1>BulbaPlay</h1>
        <div>
          <iframe
            id="bulbagame"
            src="game2/BulbaPlay.html"
            frameborder="0"
          ></iframe>
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
    
    <style lang="scss">

</style>