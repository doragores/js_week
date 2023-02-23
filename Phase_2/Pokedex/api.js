require('isomorphic-fetch');


const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name)
      };
    });
};


// fetchPokemon('charizard')
//   .then((pokemon) => console.log(pokemon));


module.exports = fetchPokemon;

// const fetchPokemon = (pokemon) => {
//    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// }

// fetchPokemon('pikachu')
//   .then((pokemon) => console.log(pokemon))

