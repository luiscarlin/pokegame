import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Pokedex from 'pokedex-promise-v2';

function App() {
  useEffect(() => {
    const P = new Pokedex();

    P.getPokemonsList()
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
