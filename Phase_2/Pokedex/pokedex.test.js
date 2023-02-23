const Pokedex = require('./Pokedex');


describe('pokedex', () => {
  it('constructs with two empty arrays', () => {
    const pokemon = new Pokedex();
    expect(pokemon).toEqual({"pokedex": [], "pokemon": []});
  });

  it('adds a pokemon to the pokedex', async () => {
    const pokemon = new Pokedex();
    await pokemon.addPokemon('pikachu');
    expect(pokemon.pokedex.length).toBe(1);
    expect(pokemon.pokedex[0].name).toBe('pikachu');
  });
});