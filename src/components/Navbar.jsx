const Navbar = ({ setPokemonIndex, pokemonIndex, pokemonList }) => {
  const handleClick = event => {
    if (event.target.id === 'previous') {
      setPokemonIndex(pokemonIndex - 1)
    } else {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  return (
    <div>
      {pokemonIndex > 0 && (
        <button type="button" id="previous" onClick={handleClick}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleClick}>
          Suivant
        </button>
      )}
    </div>
  )
}

export default Navbar
