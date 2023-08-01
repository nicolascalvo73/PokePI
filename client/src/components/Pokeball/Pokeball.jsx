import styles from './Pokeball.module.css'

const Pokeball = () => {
	return (
		<div className={styles.container}>
			<div className={styles.pokeball}>
				<div className={styles.pokeball__button}></div>
			</div>
		</div>
	)
}

export default Pokeball
