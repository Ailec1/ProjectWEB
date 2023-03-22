<template>
      <div
        v-if="loginVisible"
        class="rectangle"
        :style="{ top: loginPosition }"
      >
        <h2>Log In</h2>
        <p class="sentence">Please enter your Username and Password.</p>
        <form>
          <div class="box">
            <input type="text" id="username" required="" />
            <label>Username</label>
          </div>

          <div class="box">
            <input type="password" id="typePasswordX" required="" />
            <label>Password</label>
          </div>
          <button class="buttonlogin" type="submit">Log In</button>
          <span></span>
          <div>
            <div class="signup">
              <p style="color:white">
                Don't have an account ?               
                <router-link class="sign" to="signup">Sign Up</router-link>
              </p>
            </div>
          </div>
        </form>
      </div>

      
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
</template>
  
  <script>
export default {
  name: "PlayVue",
  data() {
    return {
      loginPosition: "50%",
      loginVisible: false,
      blurBackground: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loginVisible = true;
    }, 100);
    window.addEventListener("scroll", this.updateLoginPosition);
  },
  beforeMounted() {
    window.removeEventListener("scroll", this.updateLoginPosition);
  },
  methods: {
    updateLoginPosition() {
      this.loginPosition = `${50 + window.pageYOffset / 8}%`;
    },
  },
};
</script>