import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPokedex } from './pokedex'

const ViewWrapper = styled.SafeAreaView`
  flex: 1;
  background: white;
  align-items: center;
`

const Title = styled.Text`
  flex: 1;
  color: black;
  font-size: 50px;
`

const Attacks = styled.View`
  height: 100%;
  width: 100%;
  flex: 4;
  align-items: center;
  justify-content: center;
`

const Move = styled.Text`
  font-size: 20px;
`

const Players = styled.View`
  flex-direction: row;
  flex: 2;
`

const Player = styled.View``

const Health = styled.Text``

const ImageWrapper = styled.Image`
  height: 200px;
  width: 200px;
`

function App() {
  const [pikachu, setPikachu] = useState(null)
  const [charmander, setCharmander] = useState(null)
  const [pikachuHealth, setPikachuHealth] = useState(10)
  const [charmanderHealth, setCharmanderHealth] = useState(10)

  useEffect(() => {
    getPokedex()
      .getPokemonByName('pikachu')
      .then(response => setPikachu(response))

    getPokedex()
      .getPokemonByName('charmander')
      .then(response => setCharmander(response))
  }, [])

  console.log(pikachu)

  if (!pikachu || !charmander) {
    return null
  }
  return (
    <ViewWrapper>
      <Title>Pokemon</Title>
      <Players>
        <Player>
          <Health>Health: {pikachuHealth}</Health>
          <ImageWrapper source={{ uri: pikachu.sprites.back_shiny }} />
        </Player>
        <Player>
          <Health>Health: {charmanderHealth}</Health>
          <ImageWrapper source={{ uri: charmander.sprites.front_shiny }} />
        </Player>
      </Players>
      <Attacks>
        {pikachu.moves.slice(0, 5).map((item, index) => (
          <Move key={index}>{item.move.name.split('-').join(' ')}</Move>
        ))}
      </Attacks>
    </ViewWrapper>
  )
}

export default App
