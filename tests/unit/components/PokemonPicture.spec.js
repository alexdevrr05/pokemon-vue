import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture component', () => {
  test('Debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen oculta y el pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll('img');
    // toBeTruthy = toBe(true)
    expect(img1).toBeTruthy();
    expect(img2).toBe(undefined);

    expect(img1.classes('hidden-pokemon')).toBeTruthy();
    expect(img1.attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    );

    // const localThis = { pokemonId: 100 };
    // expect(PokemonPicture.computed.imgSrc.call(localThis)).toBe(
    //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    // );
  });

  test('Debe de mostrar el pokemon si showPokemon: true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    const img1 = wrapper.find('img');

    expect(img1.exists()).toBeTruthy();

    expect(img1.classes('hidden-pokemon')).toBe(false);
    expect(img1.classes('fade-in')).toBe(true);
  });
});