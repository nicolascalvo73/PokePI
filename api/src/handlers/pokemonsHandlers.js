const {
	getPokemonByName,
	getAllPokemons,
	getPokemonById,
	createPokemon,
} = require('../controllers/pokemonsControllers')

const getPokemonsHandler = async (req, res) => {
	const { name } = req.query
	try {
		const response = name ? await getPokemonByName(name) : await getAllPokemons()
		return res.status(200).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}
const getPokemonByIdHandler = async (req, res) => {
	const { id } = req.params
	try {
		console.log('handler working')
		const response = await getPokemonById(id)
		return res.status(200).json(response)
	} catch (error) {
		console.log('handler failing')
		return res.status(400).json({ error: error.message })
	}
}
const postPokemonHandler = async (req, res) => {
	const { Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Type } = req.body
	try {
		const newPokemon = await createPokemon(
			Nombre,
			Imagen,
			Vida,
			Ataque,
			Defensa,
			Velocidad,
			Altura,
			Peso,
			Type
		)
		return res
			.status(201)
			.send(`el pokemon ${Nombre} ha sido creado correctamente con el ID: ${newPokemon.ID}.`)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}

module.exports = { getPokemonsHandler, getPokemonByIdHandler, postPokemonHandler }
