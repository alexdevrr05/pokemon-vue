import getPokemonsOptions, {
  getPokemons,
  getPokemonsNames,
} from '@/helpers/getPokemonOptions';

import { randomPokemons } from '../mocks/pokemons.mock';

describe('getPokemonOptions helpers', () => {
  test('Debe de retornar un arreglo de números', () => {
    // [1, 2, 3, ...]
    const pokemonsArr = getPokemons();

    expect(pokemonsArr.length).toBe(650);
    expect(pokemonsArr[500]).toBe(501);
    expect(pokemonsArr[349]).toBe(350);
  });

  test('Debe de retornar un arreglo 4 posiciones con nombres de pokemons', async () => {
    const pokemonsNamesArr = await getPokemonsNames([438, 29, 319, 200]);

    expect(pokemonsNamesArr).toStrictEqual(randomPokemons);
  });

  test('getPokemonsOptions debe de retornar un array mezclado', async () => {
    const pokemonOptions = await getPokemonsOptions();

    expect(pokemonOptions.length).toBe(4);
    // randoms pokemons names and id's
    expect(pokemonOptions).toEqual([
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
