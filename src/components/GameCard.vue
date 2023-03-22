<template>
  <div :class="cardClass">
    <div class="ruban">
      <img :src="pokemon.image" class="pokemon-image" alt="Ma super image" />
      <div class="pokemon-text">
        <h4 class="pokemon-name">{{ game.title }}</h4>
        <div class="pokemon-description">Play with {{ game.pokemon }} !</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cardClass() {
      switch (this.pokemon.type) {
        case "plant":
          return "card plant-type";
        case "fire":
          return "card fire-type";
        case "water":
          return "card water-type";
        case "insect":
          return "card insect-type";
        case "normal":
          return "card normal-type";
        case "poison":
          return "card poison-type";
        case "ground":
          return "card ground-type";
        case "fairy":
          return "card fairy-type";
        case "psy":
          return "card psy-type";
        case "fighting":
          return "card fighting-type";
        case "electric":
          return "card electric-type";
        case "rock":
          return "card rock-type";
        case "dragon":
          return "card dragon-type";
        default:
          return "card";
      }
    },
  },
};
</script>

<style lang="scss">
#pokedex-zone {
  margin: 1.5cm;
  padding: 40px;
  height: 240cm;
  background-color: rgb(214, 214, 214, 0.7);
}
#pokedex-presentation {
  font-size: 25px;
  margin-top: 20px;
}
.ruban {
  display: flex; 
  align-items: center;
  height: 200px;
  background-color: rgba(105, 107, 106, 0.635);
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 20px;
}

.pokemon-image {
  height: 200px;
  width: 200px;
  transition: transform 3s;
}
.pokemon-image:hover {
  transform: rotate(360deg);
}
.pokemon-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
  max-width: calc(100% - 220px);
}
.pokemon-id{
    font-size: 17px;
    color: rgb(0, 0, 0)
}
.pokemon-name {
  font-size: 30px;
  margin: 0 0 10px 0;
  text-decoration: none;
}
.pokemon-description {
  font-size: 22px;
  position:relative;
  text-align: left;
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

.plant-type .ruban {
  background-color: #75dea9;
}
.fire-type .ruban {
  background-color: #ff7d45;
}
.water-type .ruban {
  background-color: #7b93e5;
}
.insect-type .ruban {
  background-color: #c8d44b;
}
.normal-type .ruban {
  background-color: #a7a7a7;
}
.poison-type .ruban {
  background-color: #8f6598;
  color:white;
}
.ground-type .ruban {
  background-color: #e0ae75;
}
.fairy-type .ruban {
  background-color: #f190e2;
}
.psy-type .ruban {
  background-color: #f264dd;
}
.fighting-type .ruban {
  background-color: #a03a33;
  color:white;
}
.electric-type .ruban {
  background-color: #ffff3d;
}
.rock-type .ruban {
  background-color: #985b37;
  color:white;
}
.dragon-type .ruban {
  background-color: #2b1194;
  color:white;
}
</style>