const Navbar = ({ setPokemonIndex, pokemonIndex, pokemonList }) => {
  const handleClick = index => () => {
    setPokemonIndex(index)
    if (index === 3) {
      alert('Pika pika !')
    }
  }

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button type="button" key={pokemon.name} onClick={handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  )
}

export default Navbar
