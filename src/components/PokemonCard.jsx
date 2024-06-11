import React, { useState, useEffect } from 'react'
import './PokemonCard.modules.css'

const PokemonCard = ({ pokemon }) => {
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
