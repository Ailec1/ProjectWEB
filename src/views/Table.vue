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
                <li class="active"><router-link class="site" to="table">Table</router-link></li>
                <li><router-link class="site" to="login">Log In</router-link></li>
                <li><router-link class="site" to="signup">Sign Up</router-link></li>
                <li id="play"><router-link class="site" to="play">Play</router-link></li>
              </ul>
            </div>
          </section>
        </header>
               <div id="text-zone">
          <h1>Table</h1>

          <table name="table" class="datatable">
                    <thead>
                        <tr>
                            <td>Pseudo</td>
                            <td>Score</td>
                            <td>TIme</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>ArT2022</td>
                        <td>20556</td>
                        <td>1:26</td>
                        </tr>
                        <tr>
                        <td>mev</td>
                        <td>54689</td>
                        <td>13:45</td>
                        </tr>
                        <tr>
                        <td>ailec</td>
                        <td>4444</td>
                        <td>1:14</td>
                        </tr>
                    </tbody>
                </table>
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
  .datatable {
    width: 100%;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important;}
    
.datatable td, .datatable th {
    text-align: center;
    padding: 24px;
}

.datatable tr:not(:last-child) td, .datatable th {
    border-bottom: 1px solid #ccc;
}

  table,td {
    border: 1px solid #333;
    text-align:"left";
    align-items: center;
  }
  thead, tfoot {
    background-color: #333;
    color: #fff;
    position: relative;
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

}
  </style>