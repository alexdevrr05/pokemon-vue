<template>
    <div>
        <h1>¿Quién es este pokemon?</h1>
        <PokemonPictureVue :pokemonID="60" :showPokemon="false" />
        <PokemonOptionsVue :pokemonOptions="pokemonOptions" />
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
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonOptions = await getPokemonsOptions();
        },
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>

<style lang="scss" scoped>

</style>    