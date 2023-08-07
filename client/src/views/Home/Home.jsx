import styles from './Home.module.css'
import wallpaper from '../../assets/wallpapers'
import pokelogo from '../../assets/images/logo.png'
import TypeBar from '../../components/TypeBar/TypeBar'
import Nav from '../../components/Nav/Nav'
import Paginator from '../../components/Paginator/Paginator'

const Home = () => {
	const imageUrl = wallpaper()
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
				<Paginator />
				<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
				<TypeBar />
			</div>
		</>
	)
}

export default Home
