import React, { useState, useEffect } from 'react'
import './PokemonCard.modules.css'

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
  },
]

const PokemonCard = () => {
  const pokemon = pokemonList[0]
  return (
    <figure className="container">
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>
        {pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1).toLowerCase()}
      </figcaption>
    </figure>
  )
}

export default PokemonCard
