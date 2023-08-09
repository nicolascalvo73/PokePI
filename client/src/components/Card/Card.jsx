/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import TypeButton from '../TypeButton/TypeButton'
import styles from './Card.module.css'

const Card = ({ name, types, img, id }) => {
	const pokeName = (name) => {
		let nombre = name
		if (name.length > 9) return nombre.slice(0, 9) + '...'
		return nombre
	}

	return (
		<div className={styles.container}>
			<Link to={`/detail/${id}`} className={styles.link}>
				<h3>{pokeName(name)}</h3>
				<img className={styles.image} src={img} alt="" />
			</Link>
			<div className={styles.typeContainer}>
				{types &&
					types.map((type, index) => {
						return <TypeButton key={index} type={type} />
					})}
			</div>
		</div>
	)
}

export default Card
