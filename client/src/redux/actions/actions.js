import axios from 'axios'
import {
	ALL_NAMES,
	CLEAR_DETAIL,
	CLEAR_HOME,
	FILTER_SRC,
	FILTER_TYPE,
	GET_ALL_POKEMONS,
	GET_ALL_TYPES,
	GET_POKEMON_DETAIL,
	ORDEN_ALFABETICO,
	ORDEN_ATAQUE,
} from '../actions/types'

let names = []

export const getAllPokemons = () => {
	return async function (dispatch) {
		const response = await axios('/pokemons')
		const pokemons = response.data
		names = pokemons.map((pokemon) => pokemon.name)
		dispatch({ type: GET_ALL_POKEMONS, payload: pokemons })
	}
}

export const allNames = () => {
	return async function (dispatch) {
		dispatch({ type: ALL_NAMES, payload: names })
	}
}

export const getPokemonDetail = (id) => {
	return {
		type: GET_POKEMON_DETAIL,
		payload: id,
	}
}

export const getAllTypes = () => {
	return async (dispatch) => {
		const response = await axios('/types')
		const types = response.data
		dispatch({ type: GET_ALL_TYPES, payload: types })
	}
}

export const clearDetail = () => {
	return {
		type: CLEAR_DETAIL,
		payload: {},
	}
}

export const createPokemon = (data) => {
	return async () => {
		const create = await axios.post('/pokemons', data)
		return create
	}
}

export const clearHome = () => {
	return {
		type: CLEAR_HOME,
	}
}

export const filterType = (value) => {
	return {
		type: FILTER_TYPE,
		payload: value,
	}
}

export const filterOrigen = (value) => {
	return {
		type: FILTER_SRC,
		payload: value,
	}
}

export const ordenAlfabetico = (value) => {
	return {
		type: ORDEN_ALFABETICO,
		payload: value,
	}
}

export const ordenAtaque = (value) => {
	return {
		type: ORDEN_ATAQUE,
		payload: value,
	}
}
