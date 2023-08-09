/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import styles from './TypeButton.module.css'
import svgImages from '../../utils/svgImages'

const TypeButton = ({ id, type }) => {
	const img = svgImages[type]
	return (
		<button className={styles.button}>
			<img src={img} alt={`${type} icon id: ${id}`} />
			<tooltip>{type}</tooltip>
		</button>
	)
}

export default TypeButton
