import pokeApi from '@/api/pokeApi';

describe('pokeApi', () => {
  test('axios debe estar configurado con pokemon api correcta', () => {
    expect(pokeApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });
});
