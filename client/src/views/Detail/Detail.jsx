import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import prev from '../../assets/images/prev.svg'
import TypeButton from '../../components/TypeButton/TypeButton'
import { clearDetail, getPokemonDetail } from '../../redux/actions/actions'
import styles from './Detail.module.css'

const Detail = () => {
	const { id } = useParams()
	const { ID, Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Type, Imagen } = useSelector(
		(state) => state.detail
	)
	const name = Nombre ? Nombre.toUpperCase() : ''
	console.log(Type)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPokemonDetail(id))
		return () => {
			dispatch(clearDetail())
		}
	}, [dispatch, id])

	const goBack = () => {
		window.history.go(-1)
	}

	return (
		<div className={styles.container}>
			<div className={styles.detail}>
				<button className={styles.button} onClick={goBack}>
					<img src={prev} alt="type icon" />
					<tooltip>volver</tooltip>
				</button>
				<div className={styles.data}>
					{name !== '' && <h1>{name}</h1>}
					<div className={styles.info}>
						<h3>Id: {ID}</h3>
						<h3>Vida: {Vida}</h3>
						<h3>Ataque: {Ataque} </h3>
						<h3>Defensa: {Defensa} </h3>
						<h3>Velocidad: {Velocidad} </h3>
						<h3>Altura: {Altura} </h3>
						<h3>Peso: {Peso} </h3>
						<div className={styles.typeContainer}>
							{Type &&
								Type.length > 0 &&
								Type.map((type, index) => {
									return <TypeButton key={index} id={index} type={type} />
								})}
						</div>
					</div>
				</div>
				<img src={Imagen} alt="" />
			</div>
		</div>
	)
}

export default Detail
