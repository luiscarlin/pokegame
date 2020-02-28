import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Pokedex from 'pokedex-promise-v2';
// import Pokedex from 'pokeapi-js-wrapper';
// const P = new Pokedex.Pokedex();

function App() {
  useEffect(() => {
    const P = new Pokedex();

    console.log('hello');

    P.getPokemonByName('eevee')
      .then(response => console.log(response))
      .catch(console.log);
  }, []);
  return (
    <SafeAreaView>
      <Text>Welcome to Pokemon Game!</Text>
    </SafeAreaView>
  );
}

export default App;
