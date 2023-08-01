import styles from './Landing.module.css'
import Pokeball from '../../components/Pokeball/Pokeball'
import wallpaper from '../../assets/wallpapers'
import pokelogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Landing = () => {
	const imageUrl = wallpaper()

	return (
		<div>
			<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
			<Link to="/home">
				<Pokeball />
			</Link>
			<h4 className={styles.title}>Haz click en la Pokebola!</h4>
			<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
		</div>
	)
}

export default Landing
