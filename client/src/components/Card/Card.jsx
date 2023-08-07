import styles from './Card.module.css'

const Card = ({ name, types, img, id }) => {
	return (
		<div className={styles.container}>
			<h3>{name}</h3>
			<img src={img} alt="" />
		</div>
	)
}

export default Card
