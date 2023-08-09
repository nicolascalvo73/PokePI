import wallpaper from '../../assets/wallpapers'
import Paginator from '../../components/Paginator/Paginator'
import TypeBar from '../../components/TypeBar/TypeBar'
import styles from './Home.module.css'

const Home = () => {
	const imageUrl = wallpaper()
	return (
		<div className={styles.container}>
			<Paginator />
			<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
			<TypeBar />
		</div>
	)
}

export default Home
