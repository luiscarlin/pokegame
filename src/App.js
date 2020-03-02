import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import DeckSwiperExample from './Selector'
import { getPokedex } from './pokedex'

function App() {
  useEffect(() => {
    getPokedex()
      .getPokemonsList()
      .then(response => console.log(response))
      .catch(console.log)
  }, [])
  return (
    <SafeAreaView>
      <Text>Welcome to Pokemon Game!</Text>
      <DeckSwiperExample />
    </SafeAreaView>
  )
}

export default App
