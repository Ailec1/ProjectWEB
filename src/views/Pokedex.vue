<template>
<div class="tete">
  <section>
          <div class="principale">
            <ul>
              <li id="play">
                <router-link class="site" to="play">Play</router-link>
              </li>
              <li class="active">
                <router-link class="site" to="pokedex">Pokedex</router-link>
              </li>
              <li><router-link class="site" to="score">Score</router-link></li>
            </ul>
          </div>
        </section>
</div>
        

      <div id="pokedex-zone">
        <h1>Pokedex</h1>
        <p id="pokedex-presentation">
          In this page, you will find the pokemons of the Little Cup of the first generation. But what is the <a href="https://www.smogon.com/dex/sm/formats/lc/" style="color:#53145cs; font-size:28px; font-weight:600">Little Cup</a> ?
        </p>
        <div class="test-card">
          <pokemon-card
            v-for="pokemon in pokemons"
            :pokemon="pokemon"
            :key="pokemon.id"
          />
        </div>
      </div>
      <footer></footer>

  
  
</template>

<script>
import Shuffle001 from "@/assets/Shuffle001.png";
import Shuffle004 from "@/assets/Shuffle004.png";
import Shuffle007 from "@/assets/Shuffle007.png";
import Shuffle010 from "@/assets/Shuffle010.png";
import Shuffle027 from "@/assets/Shuffle027.png";
import Shuffle029 from "@/assets/Shuffle029.png";
import Shuffle032 from "@/assets/Shuffle032.png";
import Shuffle037 from "@/assets/Shuffle037.png";
import Shuffle039 from "@/assets/Shuffle039.png";
import Shuffle041 from "@/assets/Shuffle041.png";
import Shuffle043 from "@/assets/Shuffle043.png";
import Shuffle050 from "@/assets/Shuffle050.png";
import Shuffle052 from "@/assets/Shuffle052.png";
import Shuffle054 from "@/assets/Shuffle054.png";
import Shuffle058 from "@/assets/Shuffle058.png";
import Shuffle060 from "@/assets/Shuffle060.png";
import Shuffle063 from "@/assets/Shuffle063.png";
import Shuffle066 from "@/assets/Shuffle066.png";
import Shuffle072 from "@/assets/Shuffle072.png";
import Shuffle077 from "@/assets/Shuffle077.png";
import Shuffle079 from "@/assets/Shuffle079.png";
import Shuffle081 from "@/assets/Shuffle081.png";
import Shuffle090 from "@/assets/Shuffle090.png";
import Shuffle095 from "@/assets/Shuffle095.png";
import Shuffle098 from "@/assets/Shuffle098.png";
import Shuffle102 from "@/assets/Shuffle102.png";
import Shuffle104 from "@/assets/Shuffle104.png";
import Shuffle108 from "@/assets/Shuffle108.png";
import Shuffle109 from "@/assets/Shuffle109.png";
import Shuffle111 from "@/assets/Shuffle111.png";
import Shuffle116 from "@/assets/Shuffle116.png";
import Shuffle118 from "@/assets/Shuffle118.png";
import Shuffle120 from "@/assets/Shuffle120.png";
import Shuffle129 from "@/assets/Shuffle129.png";
import Shuffle133 from "@/assets/Shuffle133.png";
import Shuffle137 from "@/assets/Shuffle137.png";
import Shuffle138 from "@/assets/Shuffle138.png";
import Shuffle140 from "@/assets/Shuffle140.png";
import Shuffle147 from "@/assets/Shuffle147.png";

import PokemonCard from "@/components/PokemonCard.vue";
export default {
  name: "PokedexComponent",
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemons: [
        {
          id: 1,
          name: "Bulbasaur",
          type: "plant",
          image: Shuffle001,
          description:
            "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        },
        {
          id: 4,
          name: "Charmander",
          type: "fire",
          image: Shuffle004,
          description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        },
        {
          id: 7,
          name: "Squirtle",
          type: "water",
          image: Shuffle007,
          description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        },
        {
          id: 10,
          name: "Caterpie",
          type: "insect",
          image: Shuffle010,
          description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        },
        {
          id: 27,
          name: "Sandshrew",
          type: "ground",
          image: Shuffle027,
          description: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
        },
        {
          id: 29,
          name: "Nidoran♀",
          type: "poison",
          image: Shuffle029,
          description: "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.",
        },
        {
          id: 32,
          name: "Nidoran♂",
          type: "poison",
          image: Shuffle032,
          description: "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
        },
        {
          id: 37,
          name: "Vulpix",
          type: "fire",
          image: Shuffle037,
          description: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
        },
        {
          id: 39,
          name: "Jigglypuff",
          type: "normal",
          image: Shuffle039,
          description: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
        },
        {
          id: 41,
          name: "Zubat",
          type: "poison",
          image: Shuffle041,
          description: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
        },
        {
          id: 43,
          name: "Oddish",
          type: "plant",
          image: Shuffle043,
          description: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
        },
        {
          id: 50,
          name: "Diglett",
          type: "ground",
          image: Shuffle050,
          description:
            "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
        },
        {
          id: 52,
          name: "Meowth",
          type: "normal",
          image: Shuffle052,
          description: "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
        },
        {
          id: 54,
          name: "Psyduck",
          type: "water",
          image: Shuffle054,
          description: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
        },
        {
          id: 58,
          name: "Growlithe",
          type: "fire",
          image: Shuffle058,
          description: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
        },
        {
          id: 60,
          name: "Poliwag ",
          type: "water",
          image: Shuffle060,
          description: "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.",
        },
        {
          id: 63,
          name: "Abra",
          type: "psy",
          image: Shuffle063,
          description: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
        },
        {
          id: 66,
          name: "Machop",
          type: "fighting",
          image: Shuffle066,
          description: "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.",
        },
        {
          id: 72,
          name: "Tentacool",
          type: "water",
          image: Shuffle072,
          description: "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
        },
        {
          id: 77,
          name: "Ponyta",
          type: "fire",
          image: Shuffle077,
          description: "It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.",
        },
        {
          id: 79,
          name: "Slowpoke",
          type: "water",
          image: Shuffle079,
          description: "It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
        },
        {
          id: 81,
          name: "Magnemite",
          type: "electric",
          image: Shuffle081,
          description: "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
        },
        {
          id: 90,
          name: "Shellder",
          type: "water",
          image: Shuffle090,
          description: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
        },
        {
          id: 95,
          name: "Onix",
          type: "rock",
          image: Shuffle095,
          description: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
        },
        {
          id: 98,
          name: "Krabby",
          type: "water",
          image: Shuffle098,
          description:
            "It can be found near the sea. The large pincers grow back if they are torn out of their sockets."
        },
        {
          id: 102,
          name: "Exeggcute",
          type: "plant",
          image: Shuffle102,
          description: "Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
        },
        {
          id: 104,
          name: "Cubone",
          type: "ground",
          image: Shuffle104,
          description: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
        },
        {
          id: 108,
          name: "Lickitung",
          type: "normal",
          image: Shuffle108,
          description: "If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.",
        },
        {
          id: 109,
          name: "Koffing",
          type: "poison",
          image: Shuffle109,
          description: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
        },
        {
          id: 111,
          name: "Rhyhorn",
          type: "ground",
          image: Shuffle111,
          description: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
        },
        {
          id: 116,
          name: "Horsea",
          type: "water",
          image: Shuffle116,
          description: "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
        },
        {
          id: 118,
          name: "Goldeen",
          type: "water",
          image: Shuffle118,
          description: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
        },
        {
          id: 120,
          name: "Staryu",
          type: "water",
          image: Shuffle120,
          description: "If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.",
        },
        {
          id: 129,
          name: "Magikarp",
          type: "water",
          image: Shuffle129,
          description: "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
        },
        {
          id: 133,
          name: "Eevee",
          type: "normal",
          image: Shuffle133,
          description: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
        },
        {
          id: 137,
          name: "Porygon",
          type: "normal",
          image: Shuffle137,
          description: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
        },
        {
          id: 138,
          name: "Omanyte",
          type: "rock",
          image: Shuffle138,
          description: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
        },
        {
          id: 140,
          name: "Kabuto",
          type: "rock",
          image: Shuffle140,
          description: "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
        },
        {
          id: 147,
          name: "Dratini",
          type: "dragon",
          image: Shuffle147,
          description: "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
        },
      ],
    };
  },
};
</script>