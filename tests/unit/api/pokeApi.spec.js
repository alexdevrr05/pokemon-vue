import pokeApi from '@/api/pokeApi';

describe('pokeApi', () => {
  test('axios debe estar configurado con el pokemon api correcto', () => {
    expect(pokeApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });
});
