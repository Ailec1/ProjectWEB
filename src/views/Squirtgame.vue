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
        <h1>Squirtle's Aquatic Adventure</h1>
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
  
  <style lang="scss">
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
  box-sizing: border-box;
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

#squirtgame{
    height: 700px;
    width: 1350px;
    margin-top: 20px;
}
#squirt-zone {
  margin: 1.5cm;
  height: 22cm;
  background-color: rgb(214, 214, 214, 0.7);
}
</style>