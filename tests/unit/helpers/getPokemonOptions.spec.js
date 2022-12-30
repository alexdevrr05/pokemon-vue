import { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions';

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

    expect(pokemonsNamesArr).toStrictEqual([
      { name: 'bonsly', id: 438 },
      { name: 'nidoran-f', id: 29 },
      { name: 'sharpedo', id: 319 },
      { name: 'misdreavus', id: 200 },
    ]);
  });

  test('getPokemonsOptions debe de retornar un array mezclado', async () => {});
});
