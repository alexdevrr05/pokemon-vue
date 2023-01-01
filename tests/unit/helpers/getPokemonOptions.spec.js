import getPokemonsOptions, {
  getPokemons,
  getPokemonsNames,
} from '@/helpers/getPokemonOptions';

import { randomPokemons } from '../mocks/pokemons.mock';

describe('getPokemonOptions helpers', () => {
  test('debe de retornar un arreglo con 650 posiciones', async () => {
    const pokemonOptionsArr = await getPokemons();
    expect(pokemonOptionsArr.length).toBe(650);
    expect(pokemonOptionsArr[500]).toBe(501);
    expect(pokemonOptionsArr[300]).toBe(301);
  });

  test('debe de retornar un arreglo de 4 posiciones con nombres de los pokemons', async () => {
    const pokemonsArr = await getPokemonsNames([438, 29, 319, 200]);
    expect(pokemonsArr.length).toBe(4);
    expect(pokemonsArr).toEqual(randomPokemons);
  });

  test('debe de retornar un array de pokemons con mezclado', async () => {
    const pokemonOptionsArr = await getPokemonsOptions();
    expect(pokemonOptionsArr).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
