const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('Can fetch the data for Charizard', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        expect(pokemon.name).toEqual('charizard');
        expect(pokemon.height).toEqual(17);
        done();
      });
  });
});
