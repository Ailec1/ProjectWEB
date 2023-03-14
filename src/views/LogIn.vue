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
                <li><router-link class="site" to="web-project">Home</router-link></li>
                <li><router-link class="site" to="pokedex">Pokedex</router-link></li>
                <li><router-link class="site" to="table">Score</router-link></li>
                <li class="active"><router-link class="site" to="login">Log In</router-link></li>
                <li><router-link class="site" to="signup">Sign Up</router-link></li>
                <li id="play"><router-link class="site" to="play">Play</router-link></li>
              </ul>
            </div>
          </section>
        </header>
        <div id="text-zone">
          <div class="rectangle">
            <h2>Login</h2>
            <p class="sentence">Please enter your Username and Password!</p>
            <form>
              <div class="box">          
                <input type="text" id="username" required="">
                <label>Username</label>             
              </div>

              <div class="box">
                <input type="password" id="typePasswordX" required="">
                <label>Password</label>             
              </div>
              <button class="buttonlogin" type="submit">Login</button>
              <span></span>
              <div>
                <p class="signup">Don't have an account? <router-link class="sign" to="signup">Sign Up</router-link></p>
              </div>
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
  
  <style lang="scss">
  

  .rectangle p{
    color: white;
    text-align: center;
  }

  .rectangle{
  position: absolute;
  top: 75%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.rectangle .sentence{
  margin-bottom: 15px;
}

.rectangle h2 {
  margin: 0 0 30px;
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
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.rectangle .box input:focus ~ label,
.rectangle .box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.rectangle .buttonlogin{
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  text-align: center;
  background-color: #119cab;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
  margin-bottom: 15px;
}

.rectangle .sign{
  color: white;
  text-decoration: none;
}

.sign:hover{
  color: #03e9f4;
}

  </style>