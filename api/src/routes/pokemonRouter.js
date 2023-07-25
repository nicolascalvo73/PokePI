const { Router } = require('express')

const pokemonRouter = Router()

const {
	getPokemonsHandler,
	getPokemonByIdHandler,
	postPokemonHandler,
} = require('../handlers/pokemonsHandlers')

pokemonRouter.get('/', getPokemonsHandler)

pokemonRouter.get('/:id', getPokemonByIdHandler)

pokemonRouter.post('/', postPokemonHandler)

module.exports = pokemonRouter
