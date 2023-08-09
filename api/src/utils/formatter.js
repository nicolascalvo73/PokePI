const pokemonFormatter = (pokemon) => {
	if (!pokemon.id) throw Error('Formato no valido.')
	const types = pokemon.types.map((element) => element.type.name)
	const defaultImage = `https://lorempokemon.fakerapi.it/pokemon/400/`
	const poke = {
		ID: pokemon.id,
		Nombre: pokemon.name,
		Imagen: pokemon.sprites.other.dream_world.front_default || defaultImage,
		Vida: pokemon.stats[0].base_stat,
		Ataque: pokemon.stats[1].base_stat,
		Defensa: pokemon.stats[2].base_stat,
		Velocidad: pokemon.stats[5].base_stat,
		Altura: pokemon.height,
		Peso: pokemon.weight,
		Type: types,
	}
	return poke
}

module.exports = pokemonFormatter
