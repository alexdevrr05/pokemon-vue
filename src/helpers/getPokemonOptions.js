import pokeApi from '@/api/pokeApi';

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4));
  return pokemons;
};

// Destructuring to have independent variables [a, b, c, d...]
const getPokemonsNames = async ([a, b, c, d] = []) => {
  const pokemonNamesResps = await Promise.all([
    pokeApi.get(`/${a}`),
    pokeApi.get(`/${b}`),
    pokeApi.get(`/${c}`),
    pokeApi.get(`/${d}`),
  ]);

  return pokemonNamesResps.map((pokemon) => pokemon.data.name);
};

export default getPokemonsOptions;
