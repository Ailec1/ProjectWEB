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
              <li id="play">
                <router-link class="site" to="play">Play</router-link>
              </li>
              <li>
                <router-link class="site" to="pokedex">Pokedex</router-link>
              </li>
              <li class="active">
                <router-link class="site" to="score">Score</router-link>
              </li>
              <li><router-link class="site" to="login">Log In</router-link></li>
              <li>
                <router-link class="site" to="signup">Sign Up</router-link>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <div id="text-zone">
        <h1>Score</h1>

        <table name="table" class="datatable">
          <thead>
            <tr>
              <td>Pseudo</td>
              <td>Score</td>
              <td>Time</td>
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
.datatable {
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;
}

.datatable td,
.datatable th {
  text-align: center;
  padding: 24px;
}

.datatable tr:not(:last-child) td,
.datatable th {
  border-bottom: 1px solid #ccc;
}

table,
td {
  border: 1px solid #333;
  text-align: "left";
  align-items: center;
  margin-top: 20px;
}
thead,
tfoot {
  background-color: #333;
  color: #fff;
  position: relative;
}
</style>