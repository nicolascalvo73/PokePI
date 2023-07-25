const validateString = (string) => {
	const regex = /[^A-Za-z]/
	if (regex.test(string)) throw Error('Nombre no valido.')
	return string.toLowerCase()
}
const validateNumber = (nro) => {
	const number = +nro
	if (isNaN(number)) throw Error('ID no valido.')
	return number
}
const validateURL = (url) => {
	const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i
	if (!regex.test(url)) throw Error('URL no valida.')
	return url.toLowerCase()
}
const typeString = (string) => {
	if (typeof string !== 'string') throw Error('String no valido.')
	return string
}

const validateUUIDv4 = (str) => {
	const uuidv4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
	return uuidv4Regex.test(str)
}

module.exports = { validateString, validateNumber, validateURL, typeString, validateUUIDv4 }
