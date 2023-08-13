import { Link } from 'react-router-dom'
import pokelogo from '../../assets/images/logo.png'
import Pokeball from '../../components/Pokeball/Pokeball'
import styles from './Landing.module.css'

const Landing = () => {
	return (
		<div>
			<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
			<Link to="/home">
				<h1 className={styles.tooltip2}>
					<Pokeball />
				</h1>
				<tooltip className={styles.tooltip}>ingresa al sitio</tooltip>
			</Link>
			<h4 className={styles.title}>Haz click en la Pokebola!</h4>
		</div>
	)
}

export default Landing
