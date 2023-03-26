<template>
  <div class="content-container">
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
  </div>

  <body>
    <div class="rectangle">
    <h2>Sign Up</h2>
    <p class="sentence">Please enter an Email, an Username and a Password.</p>
    <form>
      <div class="box">
        <input v-model="user.email" type="email" id="email" required="" />
        <label>Email</label>
      </div>
      <div class="box">
        <input v-model="user.username" type="text" id="username" required="" />
        <label>Username</label>
      </div>

      <div class="box">
        <input
          v-model="user.password"
          type="password"
          id="typePasswordX"
          required=""
        />
        <label>Password</label>
      </div>

      <button class="buttonlogin" type="submit" @click="signup">Sign Up</button>

      <div>
        <p style="color: white">
          Already have an account ?
          <router-link to="login">Log In</router-link>
        </p>
        <div>
          <router-link class="site" to="play">Play</router-link>
        </div>
      </div>

      <div class="signup"></div>
    </form>
  </div>
    
  </body>
  
</template>
    
    <script>
import UserDataService from "@/services/UserDataService";
export default {
  name: "PlayVue",
  data() {
    return {
      loginPosition: "50%",
      user: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      const data = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      };
      UserDataService.create(data)
        .then((response) => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateLoginPosition() {
      this.loginPosition = `${50 + window.pageYOffset / 8}%`;
    },
    login() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>