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
    <h2>Log In</h2>
    <p class="sentence">Please enter your Username and Password.</p>
    <form>
      <div class="box">
        <input type="text" v-model="user.username" id="username" required="" />
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
        <button class="buttonlogin" type="submit" @click="login">Log In</button>
      </div>
      <span></span>
      <div>
        <div class="signup">
          <p style="color: white">
            Don't have an account ?
            <router-link to="signup" @click="signup" >Sign Up</router-link>
          </p>
        </div>
      </div>
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
      loginPosition: "100%",
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      this.$router.push({ name: "signup" });
    },
    login() {
      const data = {
        username: this.user.username,
        password: this.user.password,
      };
      console.log(data);
      if (this.user.username === "" || this.user.password === "")
        return alert("Please fill in all fields");
      else {
        UserDataService.postLogin(data)
          .then((response) => {
            console.log(response.data.user);
            // localStorage.setItem('token', response.data.token)
            // this.$store.dispatch('user', response.user)
            this.$router.push({ name: "home" });
          })
          .catch((error) => {
            // Handle the error here
            alert("Woulah ca marche pas");
            alert(error + "woulah ca marche pas");
          });
      }
    },
  },
};
</script>