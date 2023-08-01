const { getPokemonsByType, getPokemonsTypes } = require('../controllers/typesControllers')

const getTypesHandler = async (req, res) => {
	const { type } = req.query
	try {
		const response = type ? await getPokemonsByType(type) : await getPokemonsTypes()
		return res.status(201).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}

module.exports = {
	getTypesHandler,
}
