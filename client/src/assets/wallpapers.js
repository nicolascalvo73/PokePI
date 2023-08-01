const one =
	'https://img.freepik.com/vector-gratis/fondo-estilo-comico-diseno-plano_52683-53321.jpg?w=996&t=st=1690836912~exp=1690837512~hmac=132013d06edc0ca706f0049c0259f0114747c84f93ac74d19e34134175ccab43'
const two =
	'https://img.freepik.com/vector-gratis/fondo-rojo-estilo-comic_23-2149034894.jpg?w=996&t=st=1690836918~exp=1690837518~hmac=7f7a5cb37c318d935011cca21baaa8b88988fab2e0b933fea9931cf8b466fc8a'
const three =
	'https://img.freepik.com/vector-gratis/fondo-comico-arte-pop-color-semitono-nube-divertida_60438-1750.jpg?w=1060&t=st=1690836922~exp=1690837522~hmac=8b0706f47d0c03bbcf31de842a55153e13f6cda16522a77d873dee24d49ce2d0'
const four =
	'https://img.freepik.com/vector-gratis/fondo-amarillo-lineas-zoom-comico_1017-15136.jpg?w=740&t=st=1690836920~exp=1690837520~hmac=b8d2b9a6442bc7e47eb5cdeb7e49a15414704074e8aa5b24b99c000956510f48'
const five =
	'https://img.freepik.com/vector-gratis/fondo-efecto-zoom-degradado_23-2149737544.jpg?w=996&t=st=1690836924~exp=1690837524~hmac=d86861e7c66fd74d67c701729199a3dc56317ffdd846ef49abfc39e2b48e0063'
const six =
	'https://img.freepik.com/vector-gratis/fondo-estilo-comico_23-2148836600.jpg?w=996&t=st=1690836944~exp=1690837544~hmac=74b58ed50b4c11e3cd161dafcb956f2071428ac0a79495858f8bbf7858277f06'
const seven =
	'https://img.freepik.com/vector-gratis/fondo-pantalla-estilo-comico_79603-1248.jpg?w=996&t=st=1690836940~exp=1690837540~hmac=db63583e4695202cbd764bf0ff212d18e889d6f65b248799c8efb76312cea50f'

const wallpaper = () => {
	let image = seven
	const random = Math.floor(Math.random() * 7)
	switch (random) {
		case 1:
			image = one
			break
		case 2:
			image = two
			break
		case 3:
			image = three
			break
		case 4:
			image = four
			break
		case 5:
			image = five
			break
		case 6:
			image = six
			break

		default:
			image = seven
			break
	}
	return image
}

export default wallpaper
