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
                <li><router-link class="site" to="table">Table</router-link></li>
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
            <p>Please enter your Username and Password!</p>
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

              <div>
                <p class="signup">Don't have an account? <router-link class="site" to="signup">Sign Up</router-link></p>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <nav>
            <a href="../html/a%20propos.html">Contact</a>
          </nav>
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
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Century Gothic;
  }
  header,
  footer {
    background-color: rgba(24, 2, 83, 0.6);
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5cm;
    background-size: cover;
    background-position: center;
    font-style: oblique;
  }
  
  h1{
      font-size: 45px;
  }
  ul {
    font-size: 15px;
    list-style: none;
    float: left;
    display: flex;
    margin-top: 35px;
    margin-right: 10px;
  }
  
  ul li a {
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    border: 2.5px solid transparent;
    margin: 10px;
    padding: 5px;
    font-size: 25px;
  }
  
  ul li a:hover {
    background: rgba(24, 2, 83, 0.6);
    color: white;
  }
  
  .active a {
    background: rgba(24, 2, 83, 0.6);
    color: white;
  }
  
  #play {
    margin-top: -20px;
  }
  
  #play a {
    font-size: 40px;
    border: 2px solid;
    padding: 10px;
    background: rgb(255, 255, 255);
  }
  
  #play a:hover {
    transition: 0.6s ease;
    background: rgba(24, 2, 83, 0.6);
    color: white;
  }
  
  body {
    background-attachment: fixed;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }

  .rectangle {
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

.rectangle h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}

.rectangle p {
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #fff;
}

.rectangle .user label{
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.rectangle .user .buttonlogin{
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  text-align: center;
  background-color: #47AB11;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
}

  
  #text-zone {
    margin: 1.5cm;
    height: 20cm;
    background-color: rgb(214, 214, 214, 0.7);
  }
  
  footer {
    height: 1.5cm;
    background-size: cover;
    background-position: center;
    font-style: oblique;
    height: 60px;
    /* positionner le footer en bas de la page */
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: c;
    background-position: center;
    text-decoration: none;
    color: #ffffff;
    margin-top: 5cm;
    padding: 1px 10px;
  }
  
  footer a {
    position: relative;
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    float: right;
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    border: 2.5px solid transparent;
    padding: 0px;
    font-size: 20px;
  }
  footer a:hover a {
    transition: 0.6s ease;
    background: rgba(24, 2, 83, 0.6);
    color: white;
    font-size: 40px;
    border: 2px solid;
    padding: 10px;
  }
  </style>