/* eslint-disable react/prop-types */
import styles from './Card.module.css'
import TypeButton from '../TypeButton/TypeButton'

const Card = ({ name, types, img, id }) => {
	return (
		<div className={styles.container}>
			<h3>{name}</h3>
			<img className={styles.image} src={img} alt="" />
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
