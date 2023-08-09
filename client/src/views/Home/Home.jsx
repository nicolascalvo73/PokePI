import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wallpaper from '../../assets/wallpapers'
import Loading from '../../components/Loading/Loading'
import Paginator from '../../components/Paginator/Paginator'
import TypeBar from '../../components/TypeBar/TypeBar'
import { allNames, getAllPokemons } from '../../redux/actions/actions'
import styles from './Home.module.css'

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllPokemons())
		dispatch(allNames())
	}, [dispatch])
	const allPokes = useSelector((state) => state.pokemons)
	const imageUrl = wallpaper()
	return (
		<div className={styles.container}>
			{allPokes.length === 0 ? <Loading /> : <Paginator allPokes={allPokes} />}
			<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
			<TypeBar />
		</div>
	)
}

export default Home
