/* eslint-disable react/jsx-no-undef */
import styles from './Paginator.module.css'
import Card from '../Card/Card'
import prev from '../../assets/images/prev.svg'
import next from '../../assets/images/next.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
// import { useState } from 'react'

const Paginator = () => {
	let page = 0
	const allPokes = useSelector((state) => state.pokemons)
	const [pokes, setPokes] = useState(allPokes.splice(page, 12))
	const nextPage = () => {
		page += 12
		console.log(page)
		setPokes(allPokes.splice(page, 12))
	}
	const prevPage = () => {
		page -= 12
		console.log(page)
		setPokes(allPokes.splice(page, 12))
	}

	return (
		<div className={styles.container}>
			<button onClick={prevPage} className={`${styles.button} ${styles.prev}`}>
				<img src={prev} alt="type icon" />
				<tooltip>anteriores</tooltip>
			</button>
			{pokes.map(({ Nombre, Type, Imagen, ID }) => {
				return <Card key={ID} id={ID} name={Nombre} types={Type} img={Imagen} />
			})}
			<button onClick={nextPage} className={`${styles.next} ${styles.button}`}>
				<img src={next} alt="type icon" />
				<tooltip>siguientes</tooltip>
			</button>
		</div>
	)
}

export default Paginator
