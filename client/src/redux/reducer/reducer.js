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
				pokemons: [...state.master],
			}

		case FILTER_TYPE:
			state.filtered = state.master.filter((item) => item.Type.includes(payload))
			return {
				...state,
				pokemons: state.filtered,
			}

		case FILTER_SRC:
			const filteredByType =
				payload === 'true'
					? state.master.filter((item) => typeof item.ID === 'number')
					: state.master.filter((item) => typeof item.ID !== 'number')

			return {
				...state,
				filtered: filteredByType,
				pokemons: filteredByType,
			}
		case ORDEN_ALFABETICO:
			const copyAlf = state.filtered.length ? state.filtered : [...state.master]
			const filterAlf =
				payload === 'az'
					? [...copyAlf].sort((a, b) => (a.Nombre > b.Nombre ? 1 : -1))
					: [...copyAlf].sort((a, b) => (b.Nombre > a.Nombre ? 1 : -1))

			return {
				...state,
				filtered: filterAlf,
				pokemons: filterAlf,
			}

		case ORDEN_ATAQUE:
			const filterAtaq =
				payload === 'menor'
					? [...state.pokemons].sort((a, b) => a.Ataque - b.Ataque)
					: [...state.pokemons].sort((a, b) => b.Ataque - a.Ataque)

			return {
				...state,
				pokemons: filterAtaq,
			}

		default:
			return { ...state }
	}
}

export default rootReducer
