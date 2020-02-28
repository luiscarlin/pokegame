import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('/');
  }, []);
  return (
    <SafeAreaView>
      <Text>Welcome to Pokemon Game!</Text>
    </SafeAreaView>
  );
}

export default App;
