<template>

    <h1 v-if="!currentPokemon">Loading...</h1>

    <div v-else>
        <h1>¿Quién es este pokemon?</h1>
        <PokemonPictureVue 
            :pokemonID="currentPokemon.id"
            :showPokemon="showPokemon"
        />
        <PokemonOptionsVue 
            :pokemonOptions="pokemonOptions" 
            @handleClickPokemonOption="handleClickPokemonOption"
        />
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
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonOptions = await getPokemonsOptions();
            // we require a number between zero and three
            const rndInt = Math.floor(Math.random() * 4);
            this.currentPokemon = this.pokemonOptions[ rndInt ];
        },
        handleClickPokemonOption() {
            console.log('HELLLO WORLD');
            this.showPokemon = true;
        },
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>

<style lang="scss" scoped>

</style>    