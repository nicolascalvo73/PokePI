const { Type } = require('../db')
const { validateNumber } = require('../utils/validations')
const { getPokemonById } = require('./pokemonsControllers')
const axios = require('axios')

const getPokemonsByType = async (type) => {
	const typeNumber = validateNumber(type)
	// const pokemons = await Type.getPokemons()
	const pokemonsByType = await axios(`https://pokeapi.co/api/v2/type/${typeNumber}`)
	const pokemonURLArray = pokemonsByType.data.pokemon
	const allPokemonsByType = await Promise.all(
		pokemonURLArray.map(async (element) => {
			const id = element.pokemon.url.split('/').slice(-2, -1)[0]
			const apiPokemon = await getPokemonById(id)
			return apiPokemon
		})
	)

	return [...allPokemonsByType]
}

const getPokemonsTypes = async () => {
	const types = Type.findAll()
	return types
}

const getTypesToDB = async () => {
	const types = getPokemonsTypes()
	if (!types.length) {
		const response = await axios('https://pokeapi.co/api/v2/type/')
		const pokemonTypes = response.data.results.map(({ name }, index) => {
			return { ID: index + 1, Nombre: name }
		})

		await Promise.all(pokemonTypes.map((type) => Type.create(type)))
		console.log('Pokemon Types cargados exitosamente en la DB.')
	} else {
		console.log('Encontramos Types preexistentes en la DB.')
	}
}

module.exports = { getPokemonsByType, getPokemonsTypes, getTypesToDB }
