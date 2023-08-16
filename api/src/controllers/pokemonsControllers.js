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
	console.time('Demoron: ')
	const DBPokemonsID = await Pokemon.findAll({ attributes: ['ID'] })
	const getDBPokemons = DBPokemonsID.map(async (pokemon) => {
		const pokemonData = await getPokemonById(pokemon.ID)
		return pokemonData
	})
	const DBPokemons = await Promise.all(getDBPokemons)

	// const initialURL = 'https://pokeapi.co/api/v2/pokemon/'
	const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=120'

	const getPokemonByList = async (url) => {
		const allApiPokemons = await axios.get(url)
		const allApiPokemonsArray = allApiPokemons.data.results

		const apiPokemons = await Promise.all(
			allApiPokemonsArray.map(async (pokemon) => {
				const id = pokemon.url.split('/').slice(-2, -1)[0]
				// console.log(id)
				const apiPokemon = await getPokemonById(id)
				return apiPokemon
			})
		)

		// if (allApiPokemons.data.next !== null) {
		// 	const nextApiPokemons = await getPokemonByList(allApiPokemons.data.next)
		// 	return [...apiPokemons, ...nextApiPokemons]
		// }

		return apiPokemons
	}

	const apiPokemon = await getPokemonByList(initialURL)
	const allPokemons = [...DBPokemons, ...apiPokemon]
	console.timeEnd('Demoron: ')

	return allPokemons
}

const getPokemonByName = async (name) => {
	const nombre = validateString(name)
	let pokemon = await Pokemon.findOne({
		where: { Nombre: { [Op.eq]: nombre } },
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
	if (validateUUIDv4(id)) {
		console.log('UUID  =>  ' + id)
		const response = await Pokemon.findByPk(id, {
			include: [{ model: Type, attributes: ['Nombre'], through: { attributes: [] } }],
		})
		const pokemon = {
			...response.toJSON(),
			Type: response.Types.map((type) => type.Nombre),
		}

		return { ...pokemon }
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
