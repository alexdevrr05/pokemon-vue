<template>
  <h1 v-if="!currentPokemon">Loading...</h1>

  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPictureVue
      :pokemon-id="currentPokemon.id"
      :show-pokemon="showPokemon"
    />
    <!-- NO hace falta colocar el argumento pokemonId en checkAnswer -->
    <PokemonOptionsVue
      :pokemon-options="pokemonOptions"
      @handleClickPokemonOption="checkAnswer"
    />

    <!-- Podemos poner un template, y así no aparece en el html de la page -->
    <template v-if="showAnswer" class="fade-in">
      <h2>{{ messageResult }}</h2>
      <button @click="newGame">New game</button>
    </template>
  </div>
</template>

<script>
import PokemonPictureVue from '@/components/PokemonPicture.vue';
import PokemonOptionsVue from '@/components/PokemonOptions.vue';

import getPokemonsOptions from '@/helpers/getPokemonOptions';

export default {
  name: 'PokemonPage',
  components: {
    PokemonPictureVue,
    PokemonOptionsVue,
  },
  data() {
    return {
      pokemonOptions: [],
      showPokemon: false,
      currentPokemon: null,
      showAnswer: false,
      messageResult: '',
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonsOptions();
      // we require a number between zero and three
      const rndInt = Math.floor(Math.random() * 4);
      this.currentPokemon = this.pokemonOptions[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      this.currentPokemon.id === pokemonId
        ? (this.messageResult = `Acertaste! es ${this.currentPokemon.name}  🥳`)
        : (this.messageResult = `Error! es ${this.currentPokemon.name} 😕`);
    },
    newGame() {
      this.showPokemon = false;
      this.pokemonOptions = [];
      this.showAnswer = false;
      this.currentPokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style lang="scss" scoped></style>
