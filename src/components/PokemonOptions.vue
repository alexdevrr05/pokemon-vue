<template>
  <div class="options-container">
    <ul id="example">
      <li
        v-for="pokemon in pokemonOptions"
        :key="pokemon.id"
        @click="$emit('handleClickPokemonOption', pokemon.id)"
      >
        {{ capitalizePokemonName(pokemon.name) }}
      </li>
    </ul>
  </div>
</template>

<script>
import capitalizeFirstLetter from '@/helpers/capitalizeFirstLetter';

export default {
  props: {
    pokemonOptions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    capitalizePokemonName(pokemonName) {
      return capitalizeFirstLetter(pokemonName);
    },
  },
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
