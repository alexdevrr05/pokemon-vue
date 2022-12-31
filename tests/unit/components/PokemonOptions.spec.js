import { shallowMount } from '@vue/test-utils';
import { randomPokemons } from '../mocks/pokemons.mock';

import PokemonOptions from '@/components/PokemonOptions';

describe('PokemonOptions component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemonOptions: randomPokemons,
      },
    });
  });

  // toMatchInlineSnapshot genera un template string aquí como en __snapshots
  test('Debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchInlineSnapshot();
  });

  // test('should ', () => {
  //   const wrapper = shallowMount(PokemonOptions, {
  //     props: {
  //       pokemonOptions: [],
  //     },
  //   });

  //   wrapper.vm.$emit('handleClickPokemonOption');
  //   expect(wrapper.emitted().handleClickPokemonOption).toBeTruthy();
  // });
});
