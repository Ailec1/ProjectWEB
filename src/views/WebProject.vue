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
              <li><router-link class="site" to="score">Score</router-link></li>
            </ul>
          </div>
        </section>
      </header>
      <div id="text-zone">
        <h1>Home</h1>
        <p>
          Welcome to our own online Pokegame! Here, you can lead your favorite
          pokemon in a platform world with the keygboard arrows and vanquish
          ennemies: the terrible Ratatas !
        </p>
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


