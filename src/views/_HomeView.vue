<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Vue.js examples</h1>
    <div class="container">
      <router-link id="web" to="web-project">Web Project</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  beforeMount() {
    fetch("/api/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  },
};
</script>

<style lang="scss">
ul {
  &.main {
    width: 80%;
    margin: 0 auto 50px;
    text-align: left;
  }

  &.sub {
    margin: auto;
    text-align: left;
  }

  a {
    color: #000;
    line-height: 1.5em;
  }
}

.container {
  text-align: center;
  margin: 20px;
}

#web {
  text-decoration: none;
  font-size: 50px;
  font-weight: 700;
  padding: 20px;
}
#web:hover {
  background-color: rgba(24, 2, 83, 0.6);
  color: white;
}
</style>
