/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { useState } from 'react'
import next from '../../assets/images/next.svg'
import prev from '../../assets/images/prev.svg'
import Card from '../Card/Card'
import styles from './Paginator.module.css'

const Paginator = ({ allPokes }) => {
	const itemsPage = 12
	const [currentPage, setCurrentPage] = useState(0)

	const startIndex = currentPage * itemsPage
	const endIndex = startIndex + itemsPage
	const pokes = allPokes.slice(startIndex, endIndex)

	const nextPage = () => {
		if (currentPage < Math.floor(allPokes.length / itemsPage)) {
			setCurrentPage(currentPage + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1)
		}
	}

	return (
		<div className={styles.container}>
			{currentPage > 0 && (
				<button onClick={prevPage} className={`${styles.button} ${styles.prev}`}>
					<img src={prev} alt="type icon" />
					<tooltip>anteriores</tooltip>
				</button>
			)}
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
