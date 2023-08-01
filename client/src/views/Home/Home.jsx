import styles from './Home.module.css'
import wallpaper from '../../assets/wallpapers'
import pokelogo from '../../assets/images/logo.png'

const Home = () => {
	const imageUrl = wallpaper()
	return (
		<div className={styles.container}>
			<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
			<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
		</div>
	)
}

export default Home
