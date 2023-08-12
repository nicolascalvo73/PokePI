import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Paginator from '../../components/Paginator/Paginator'
import TypeBar from '../../components/TypeBar/TypeBar'
import styles from './Home.module.css'

const Home = () => {
	const allPokes = useSelector((state) => state.pokemons)
	return (
		<div className={styles.container}>
			{allPokes.length === 0 ? <Loading /> : <Paginator allPokes={allPokes} />}
			<TypeBar />
		</div>
	)
}

export default Home
