import styles from './Form.module.css'
import pokelogo from '../../assets/images/logo.png'
import wallpaper from '../../assets/wallpapers'
import prev from '../../assets/images/prev.svg'
import reload from '../../assets/images/reload.svg'

const Form = () => {
	const imageUrl = wallpaper()

	return (
		<div className={styles.container}>
			<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
			<div className={styles.detail}>
				<button className={styles.button}>
					<img src={prev} alt="type icon" />
					<tooltip>volver</tooltip>
				</button>
				<form className={styles.data}>
					<input
						type="text"
						placeholder="Nombra tu pokemon!"
						className={`${styles.input} ${styles.name}`}></input>
					<div className={styles.info}>
						<h3>
							Vida:
							<input type="number" placeholder="01" className={styles.input}></input>
						</h3>

						<h3>
							Ataque:
							<input type="number" placeholder="01" className={styles.input}></input>
						</h3>

						<h3>
							Defensa:
							<input type="number" placeholder="01" className={styles.input}></input>
						</h3>

						<h3>
							Velocidad:
							<input type="number" placeholder="01" className={styles.input}></input>
						</h3>

						<h3>
							Altura:
							<input type="number" placeholder="01" className={styles.input}></input>
						</h3>

						<h3>
							Peso:
							<input type="number" placeholder="01" className={styles.input}></input>
						</h3>

						<h3>
							<select className={styles.typeSelector}>
								<option>type</option>
								<option>normal</option>
								<option>fighting</option>
								<option>flying</option>
								<option>poison</option>
								<option>ground</option>
								<option>rock</option>
								<option>bug</option>
								<option>ghost</option>
								<option>steel</option>
								<option>fire</option>
								<option>water</option>
								<option>grass</option>
								<option>electric</option>
								<option>psychic</option>
								<option>ice</option>
								<option>dragon</option>
								<option>dark</option>
								<option>fairy</option>
								<option>unknown</option>
								<option>shadow</option>
							</select>
						</h3>
					</div>
				</form>
				<div className={styles.image}>
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
						alt=""
					/>
					<button className={`${styles.button} ${styles.reload}`}>
						<img src={reload} alt="type icon" />
						<tooltip>generar imagen</tooltip>
					</button>
				</div>
			</div>
			<img className={styles.background} src={imageUrl} alt="imagen de fondo estilo comic" />
		</div>
	)
}

export default Form
