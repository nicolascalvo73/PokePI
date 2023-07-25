const { Pokemon, Type } = require('../db')
const { Op } = require('sequelize')
const {
	validateString,
	validateNumber,
	validateURL,
	typeString,
	validateUUIDv4,
} = require('../utils/validations')
const axios = require('axios')
const pokemonFormatter = require('../utils/formatter')

const getAllPokemons = async () => {
	const DBPokemons = await Pokemon.findAll()
	const apiPokemons = await getPokemonByList('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
	return [...DBPokemons, ...apiPokemons]
}
const getPokemonByList = async (url) => {
	const allApiPokemons = await axios(url)
	const allApiPokemonsArray = allApiPokemons.data.results
	const apiPokemons = allApiPokemonsArray.map(async (pokemon) => {
		const id = pokemon.url.split('/').slice(-2, -1)[0]
		const apiPokemon = await getPokemonById(id)
		return apiPokemon
	})
	const response = await Promise.all(apiPokemons)
	return response
}
const getPokemonByName = async (name) => {
	const nombre = validateString(name)
	let pokemon = await Pokemon.findOne({
		where: { Nombre: { [Op.iLike]: `%${nombre}%` } },
		include: [{ model: Type, attributes: ['Nombre'], through: { attributes: [] } }],
	})
	if (pokemon === null) {
		apiPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
		if (apiPokemon.data === 'Not Found') return `${nombre} no encontrado`
		pokemon = pokemonFormatter(apiPokemon.data)
	}

	return pokemon
}

const getPokemonById = async (id) => {
	if (!id) throw Error('Hey! necesito el ID!')
	if (isNaN(id)) {
		validateUUIDv4(id)
		const pokemon = await Pokemon.findByPk(id)
		const types = await Pokemon.getTypes()
		return { ...pokemon, Type: [...types] }
	} else {
		const numberId = validateNumber(id)
		const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${numberId}`)
		const formattedPokemon = pokemonFormatter(pokemon.data)
		return formattedPokemon
	}
}

const createPokemon = async (Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Type) => {
	validateString(Nombre)
	validateNumber(Vida)
	validateNumber(Ataque)
	validateNumber(Defensa)
	validateURL(Imagen)
	typeString(Velocidad)
	typeString(Altura)
	typeString(Peso)
	if (!Nombre || !Imagen || !Vida || !Ataque || !Defensa || !Type) throw Error('Datos incompletos.')
	const newPokemon = await Pokemon.create({ Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso })
	Type.forEach((type) => {
		newPokemon.addType(type)
	})
	return newPokemon
}

module.exports = { getPokemonByName, getAllPokemons, getPokemonById, createPokemon }
