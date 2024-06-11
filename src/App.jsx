import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => alert('Hello pokemon trainer ! :)'), [])
  const [pokemonIndex, setPokemonIndex] = useState(0)

  const pokemonList = [
    {
      name: 'bulbasaur',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'charmander',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      name: 'squirtle',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      name: 'pikachu',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    },
    {
      name: 'mew',
    },
  ]

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar
        setPokemonIndex={setPokemonIndex}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
    </>
  )
}

export default App
