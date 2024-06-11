const Navbar = ({ setPokemonIndex, pokemonIndex, pokemonList }) => {
  //   const handleClick = event => {
  //     setPokemonIndex(event)
  //   }
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  )
}

export default Navbar
