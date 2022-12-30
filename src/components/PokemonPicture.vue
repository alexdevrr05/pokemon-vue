<template>
  <div class="pokemon-container">
    <div class="container-children">
      <img v-if="!showPokemon" :src="imgSrc" class="hidden-pokemon" alt="pokemon" />
      <img v-else :src="imgSrc" class="fade-in" alt="pokemon" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  display: flex;
  height: 200px;
}

.container-children {
  justify-content: center;
}

img {
  height: 200px;
  position: absolute;
  right: 36%;
  margin-right: 4rem;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>
