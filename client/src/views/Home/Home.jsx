import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Paginator from '../../components/Paginator/Paginator'
import TypeBar from '../../components/TypeBar/TypeBar'
import { getAllPokemons } from '../../redux/actions/actions'
import styles from './Home.module.css'

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllPokemons())
	}, [dispatch])
	const allPokes = useSelector((state) => state.pokemons)
	return (
		<div className={styles.container}>
			{allPokes.length === 0 ? <Loading /> : <Paginator allPokes={allPokes} />}
			<TypeBar />
		</div>
	)
}

export default Home
