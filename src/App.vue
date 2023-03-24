<template>
  <nav>
    <router-link to="/">Return to home</router-link>
  </nav>
  <router-view/>
</template>

<script>
import ScoreDataService from "./services/ScoreDataService";
import UserDataService from "./services/UserDataService";


export default {

  name: "App",
  data() {
    return {
      inventory: [],
      inventoryuser: [] 
    };
  },
  mounted() {
    ScoreDataService.getAll()
      .then(response => {
        this.inventory = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    UserDataService.getAll()
      .then(response => {
        this.inventoryuser = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
