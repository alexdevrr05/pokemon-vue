import { shallowMount } from '@vue/test-utils';
import { randomPokemons } from '../mocks/pokemons.mock';

import PokemonOptions from '@/components/PokemonOptions';
import capitalizeFirstLetter from '@/helpers/capitalizeFirstLetter';

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
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de mostrar las 4 opciones correctamente', () => {
    const liTags = wrapper.findAll('li');
    // que existan 4 li
    expect(liTags.length).toBe(4);
    // cada li debe de tener el nombre correcto del pokemon
    expect(liTags[0].text()).toBe(
      capitalizeFirstLetter(randomPokemons[0].name)
    );
    expect(liTags[1].text()).toBe(
      capitalizeFirstLetter(randomPokemons[1].name)
    );
    expect(liTags[2].text()).toBe(
      capitalizeFirstLetter(randomPokemons[2].name)
    );
    expect(liTags[3].text()).toBe(
      capitalizeFirstLetter(randomPokemons[3].name)
    );
  });

  test('Debe de emitir "handleClickPokemonOption" con sus repectivos parámetros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li');

    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    expect(wrapper.emitted('handleClickPokemonOption').length).toBe(4);
    expect(wrapper.emitted('handleClickPokemonOption')[0]).toEqual([438]);
    expect(wrapper.emitted('handleClickPokemonOption')[1]).toEqual([29]);
    expect(wrapper.emitted('handleClickPokemonOption')[2]).toEqual([319]);
    expect(wrapper.emitted('handleClickPokemonOption')[3]).toEqual([200]);
  });
});
