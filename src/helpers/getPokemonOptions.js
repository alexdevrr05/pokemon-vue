import pokeApi from '@/api/pokeApi';

export const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4));
  return pokemons;
};

// Destructuring to have independent variables [a, b, c, d...]
export const getPokemonsNames = async ([a, b, c, d] = []) => {
  const pokemonRequestsArray = [
    pokeApi.get(`/${a}`),
    pokeApi.get(`/${b}`),
    pokeApi.get(`/${c}`),
    pokeApi.get(`/${d}`),
  ];

  const [r1, r2, r3, r4] = await Promise.all(pokemonRequestsArray);

  return [
    { name: r1.data.name, id: r1.data.id },
    { name: r2.data.name, id: r2.data.id },
    { name: r3.data.name, id: r3.data.id },
    { name: r4.data.name, id: r4.data.id },
  ];
};

export default getPokemonsOptions;
