/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import TypeButton from '../TypeButton/TypeButton'
import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { filterType } from '../../redux/actions/actions'

const Card = ({ name, types, img, id }) => {
	const dispatch = useDispatch()
	const filterByType = (value) => {
		dispatch(filterType(value))
	}
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
						return <TypeButton key={index} id={type} type={type} func={filterByType} />
					})}
			</div>
		</div>
	)
}

export default Card
