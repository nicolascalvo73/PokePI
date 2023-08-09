import styles from './Detail.module.css'

import wallpaper from '../../assets/wallpapers'
import prev from '../../assets/images/prev.svg'

const Detail = () => {
	const imageUrl = wallpaper()

	return (
		<div className={styles.container}>
			<div className={styles.detail}>
				<button className={styles.button}>
					<img src={prev} alt="type icon" />
					<tooltip>volver</tooltip>
				</button>
				<div className={styles.data}>
					<h1>Ditto</h1>
					<div className={styles.info}>
						<h3>Id: 9879</h3>
						<h3>Vida: 85</h3>
						<h3>Ataque: 54</h3>
						<h3>Defensa: 88</h3>
						<h3>Velocidad: 54</h3>
						<h3>Altura: 74</h3>
						<h3>Peso: 45</h3>
						<h3>-Rock- -Sarasa-</h3>
					</div>
				</div>
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
					alt=""
				/>
			</div>
			<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
		</div>
	)
}

export default Detail
