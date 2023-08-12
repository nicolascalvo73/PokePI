import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import prev from '../../assets/images/prev.svg'
import reload from '../../assets/images/reload.svg'
import { getAllTypes } from '../../redux/actions/actions'
import TypeButton from '../../components/TypeButton/TypeButton'
import styles from './Form.module.css'

const Form = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllTypes())
	}, [dispatch])
	const types = useSelector((state) => state.types)
	console.log(types)
	const [image, setImage] = useState('https://lorempokemon.fakerapi.it/pokemon')

	const goBack = () => {
		window.history.go(-1)
	}
	const select = (event) => {
		event.preventDefault()
	}

	const getImage = (event) => {
		event.preventDefault()
		let value = Math.floor(Math.random() * 100)
		let url = `https://lorempokemon.fakerapi.it/pokemon/400/${value}`
		setImage(url)
		return url
	}

	return (
		<div className={styles.container}>
			<div className={styles.detail}>
				<button className={styles.button} onClick={goBack}>
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
						<div className={styles.typeContainer}>
							{types &&
								types.map(({ ID, Nombre }) => {
									return (
										<TypeButton
											key={ID}
											id={ID}
											type={Nombre}
											className={styles.typeButton}
											onClick={select}
										/>
									)
								})}
						</div>
					</div>
				</form>
				<div className={styles.image}>
					<img src={image} alt="" />
					<button onClick={getImage} className={`${styles.button} ${styles.reload}`}>
						<img src={reload} alt="type icon" />
						<tooltip>generar imagen</tooltip>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Form
