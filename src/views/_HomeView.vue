<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Vue.js examples</h1>
    <div class="container">
      <router-link id="web" to="login">Web Project</router-link>
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

#pokedex-zone {
  margin: 1.5cm;
  height: 100cm;
  background-color: rgb(214, 214, 214, 0.7);
}
  #pokedex-description{
    font-size: 25px;
    margin-top: 20px;
  }
  .ruban {
  display: flex; /* Utilisation de Flexbox pour centrer les éléments */
  align-items: center; /* Centrage vertical */
  height: 200px;
  background-color: rgba(105, 107, 106, 0.635);
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 20px;
}
#ruban1{
  background-color: #9be7c1;
}
#ruban4{
  background-color: #ffc562;
}
#ruban7{
  background-color: #80dce9;
}
#ruban10, #ruban13{
  background-color: #c8d44b;
}
#ruban19{
  background-color: #a7a7a7;
}
.pokemon-image{
  height: 200px;
  width: 200px;
  transition: transform 3s;
}
.pokemon-image:hover{
  transform: rotate(360deg);
}
.pokemon-text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
  max-width: calc(100% - 220px);
}
.pokemon-name{
  font-size: 30px;
  margin: 0 0 10px 0; /* positionne le titre en haut de la div2 */
}
.pokemon-description{
  font-size: 20px;
}



@media (max-width: 1000px) {
  .pokemon-description {
    display: none;
  }
}
@media (max-width: 700px) {
  .pokemon-name {
    display: none;
  }
}
.tete {
  background-color: #119cab;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5cm;
  background-size: cover;
  background-position: center;
  font-style: oblique;
}


.login-visible {
  animation: login-fall 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.ruban-jeu {
  display: flex;
  align-items: center; 
  height: 200px;
  background-color: rgba(105, 107, 106, 0.635);
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 20px;
}
#jeu1 {
  background-color: #9be7c1;
}
.rectangle p {
  color: white;
  text-align: center;
}

.rectangle {
  position: absolute;
  top: 80%;
  left: 50%;
  width: 500px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgb(24, 2, 83);
  background-image: linear-gradient(to bottom, rgb(67, 45, 128), rgb(24, 2, 83));
  box-sizing: border-box;
  z-index: 1;
  opacity:1;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
}

.rectangle .sentence {
  margin-bottom: 20px;
}

.rectangle h2 {
  margin: 0 0 40px;
  margin-top: 20px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.rectangle .box {
  position: relative;
}

.rectangle .box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.rectangle .box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.rectangle .box input:focus ~ label,
.rectangle .box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.rectangle .buttonlogin {
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  text-align: center;
  background-color: #119cab;
  color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
  margin-bottom: 15px;
  margin-top: 30px;
}

.rectangle .sign {
  color: white;
  text-decoration: none;
}

.rectangle .signup {
  margin-top: 20px;
}

.sign:hover {
  color: #03e9f4;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(19, 19, 19, 0.3);
}

.blurred {
  filter: blur(5px);
  pointer-events: none;
}

#bulbagame {
  height: 700px;
  width: 1350px;
  margin-top: 20px;
}
#bulba-zone {
  margin: 1.5cm;
  height: 22cm;
  background-color: rgb(214, 214, 214, 0.7);
}
</style>
