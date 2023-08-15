/* eslint-disable no-unused-vars */
import axios from 'axios'
import {
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

export const getAllPokemons = () => {
	return async (dispatch) => {
		const endpoint = 'http://localhost:3001/pokemons/'
		try {
			const response = await axios(endpoint)
			const pokemons = response.data
			dispatch({ type: GET_ALL_POKEMONS, payload: pokemons })
		} catch (error) {
			console.log(error)
		}
	}
}

export const getPokemonDetail = (id) => {
	return {
		type: GET_POKEMON_DETAIL,
		payload: id,
	}
}

export const createPokemon = (data) => {
	return async function (dispatch) {
		const create = await axios.post('http://localhost:3001/pokemons/', data)
		return create
	}
}

export const getAllTypes = () => {
	return async (dispatch) => {
		const response = await axios('http://localhost:3001/types/')
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

export const filterSrc = (value) => {
	return {
		type: FILTER_SRC,
		payload: value,
	}
}

export const ordenAlfabetico = (value) => {
	console.log(value)
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
