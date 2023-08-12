/* eslint-disable no-case-declarations */
import {
	GET_ALL_POKEMONS,
	GET_POKEMON_DETAIL,
	GET_ALL_TYPES,
	CLEAR_DETAIL,
	CLEAR_HOME,
	FILTER_TYPE,
	FILTER_SRC,
	ORDEN_ALFABETICO,
	ORDEN_ATAQUE,
} from '../actions/types'

const initialState = {
	master: [],
	pokemons: [],
	pokemonsDb: [],
	detail: {},
	types: [],
	filtered: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_POKEMONS:
			return {
				...state,
				pokemons: payload,
				master: payload,
			}

		case GET_POKEMON_DETAIL:
			let pokemon
			isNaN(payload)
				? (pokemon = state.pokemons.find((item) => item.ID === payload))
				: (pokemon = state.pokemons.find((item) => item.ID === Number(payload)))

			return {
				...state,
				detail: pokemon,
			}

		case GET_ALL_TYPES:
			return {
				...state,
				types: payload,
			}

		case CLEAR_DETAIL:
			return {
				...state,
				detail: payload,
			}

		case CLEAR_HOME:
			return {
				...state,
				filtered: [...state.master],
				pokemons: state.master,
			}

		case FILTER_TYPE:
			state.filtered = [...state.master]
			state.filtered =
				payload === 'all' ? state.master : [...state.master].filter((item) => item.type.includes(payload))
			return {
				...state,
				pokemons: state.filtered,
			}

		case FILTER_SRC:
			state.filtered = [...state.master]
			state.filtered =
				payload === 'false'
					? [...state.master].filter((item) => !item.inDataBase)
					: payload === 'true'
					? [...state.master].filter((item) => item.inDataBase)
					: state.master
			return {
				...state,
				pokemons: state.filtered,
			}

		case ORDEN_ALFABETICO:
			const copyAlf = state.filtered.length ? state.filtered : [...state.master]
			const filterAlf =
				payload === 'az'
					? copyAlf.sort((a, b) => a.name.localeCompare(b.name))
					: copyAlf.sort((a, b) => b.name.localeCompare(a.name))
			return {
				...state,
				pokemons: filterAlf,
			}

		case ORDEN_ATAQUE:
			const copyAtaq = state.filtered.length ? state.filtered : [...state.master]
			const filterAtaq =
				payload === 'menor'
					? copyAtaq.sort((a, b) => a.attack - b.attack)
					: copyAtaq.sort((a, b) => b.attack - a.attack)
			return {
				...state,
				pokemons: filterAtaq,
			}

		default:
			return { ...state }
	}
}

export default rootReducer
