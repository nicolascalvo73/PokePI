/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import styles from './TypeButton.module.css'
import svgImages from '../../utils/svgImages'

const TypeButton = ({ id, type, func, isSelected }) => {
	const img = svgImages[type]

	const handleClick = (buttonId) => {
		func(buttonId)
	}
	return (
		<button
			type="button"
			className={`${styles.button} ${isSelected ? styles.selected : ''}`}
			onClick={() => handleClick(id)}>
			<img src={img} alt={`${type} icon id: ${id}`} />
			<tooltip>{type}</tooltip>
		</button>
	)
}

export default TypeButton
