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
        <header>
          <section>
            <div class="principale">
              <ul>
                <li id="play"><router-link class="site" to="play">Play</router-link></li>
                <li><router-link class="site" to="pokedex">Pokedex</router-link></li>
                <li><router-link class="site" to="score">Score</router-link></li>
                <li><router-link class="site" to="login">Log In</router-link></li>
                <li class="active"><router-link class="site" to="signup">Sign Up</router-link></li>

              </ul>
            </div>
          </section>
        </header>
        <div id="text-zone">
          <div class="rectangle">
            <h2>Sign Up</h2>
            <p class="sentence">Please enter your Email adress, a Username and a Password!</p>
            <form>
              <div class="box">          
                <input type="email" id="email" required="">
                <label>Email</label>             
              </div>
              <div class="box">          
                <input type="text" id="username" required="">
                <label>Username</label>             
              </div>

              <div class="box">
                <input type="password" id="typePasswordX" required="">
                <label>Password</label>             
              </div>

              <button class="buttonlogin" type="submit">Sign Up</button>

            </form>
          </div>
        </div>
        <footer>
          
        </footer>
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
  
