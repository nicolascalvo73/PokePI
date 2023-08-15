/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import prev from '../../assets/images/prev.svg'
import reload from '../../assets/images/reload.svg'
import { getAllTypes, createPokemon } from '../../redux/actions/actions'
import TypeButton from '../../components/TypeButton/TypeButton'
import styles from './Form.module.css'
import Modal from '../../components/Modal/Modal'
import { validateForm } from '../../utils/validations'

const Form = () => {
	const dispatch = useDispatch()
	const types = useSelector((state) => state.types)
	const [image, setImage] = useState('https://lorempokemon.fakerapi.it/pokemon')
	const [selectedTypes, setSelectedTypes] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [modal, setModal] = useState({ title: '', message: '' })
	const [data, setData] = useState({
		Nombre: '',
		Ataque: '',
		Vida: '',
		Defensa: '',
		Velocidad: '',
		Altura: '',
		Peso: '',
		Type: [],
		Imagen: image,
	})

	useEffect(() => {
		setData({ ...data, Type: [...selectedTypes] })
	}, [selectedTypes])
	useEffect(() => {
		dispatch(getAllTypes())
	}, [dispatch])

	const isDataComplete = (data) => {
		for (const key in data) {
			if (key === 'Type') {
				if (data[key].length === 0) {
					return false
				}
			} else {
				if (data[key] === '') {
					return false
				}
			}
		}
		return true // Todos los campos están completos
	}
	let disabled = isDataComplete(data) ? '' : styles.disabled

	const goBack = () => {
		window.history.go(-1)
	}

	const select = (id) => {
		if (selectedTypes.includes(id)) {
			setSelectedTypes(selectedTypes.filter((selectedId) => selectedId !== id))
		} else if (selectedTypes.length < 2) {
			setSelectedTypes([...selectedTypes, id])
		} else {
			setModal({
				title: 'Maximo alcanzado',
				message: 'Solo estan permitidos dos "types" por cada pokemon.',
			})
			setShowModal(true)
			setTimeout(() => {
				setShowModal(false)
				setModal({ title: '', message: '' })
			}, 4000)
		}
	}

	const handleChange = (event) => {
		const name = event.target.name
		let value = event.target.value
		if (name === 'Nombre') value = value.toLowerCase()
		setData({ ...data, [name]: value })
	}

	const pokePost = async () => {
		const error = validateForm(data)
		if (error !== '') {
			setModal({
				title: 'Tenemos un problema...',
				message: error,
			})
			setShowModal(true)
			setTimeout(() => {
				setShowModal(false)
				setModal({ title: '', message: '' })
			}, 4000)
			return error
		}

		dispatch(createPokemon(data))

		setModal({
			title: 'Pokemon Creado!',
			message: `Tu ${data.Nombre} fue creado con éxito!`,
		})
		setShowModal(true)
		setTimeout(() => {
			setShowModal(false)
			setModal({ title: '', message: '' })
		}, 4000)
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
			{showModal && <Modal title={modal.title} message={modal.message} />}
			<div className={styles.detail}>
				<button className={styles.button} onClick={goBack}>
					<img src={prev} alt="type icon" />
					<tooltip>volver</tooltip>
				</button>
				<form className={styles.data}>
					<input
						name="Nombre"
						onChange={handleChange}
						type="text"
						placeholder="Nombra tu pokemon!"
						className={`${styles.input} ${styles.name}`}></input>
					<div className={styles.info}>
						<h3>
							Vida:
							<input
								maxLength="3"
								name="Vida"
								type="number"
								placeholder="01"
								className={styles.input}
								onChange={handleChange}></input>
						</h3>

						<h3>
							Ataque:
							<input
								name="Ataque"
								type="number"
								placeholder="01"
								className={styles.input}
								onChange={handleChange}></input>
						</h3>

						<h3>
							Defensa:
							<input
								name="Defensa"
								type="number"
								placeholder="01"
								className={styles.input}
								onChange={handleChange}></input>
						</h3>

						<h3>
							Velocidad:
							<input
								name="Velocidad"
								type="number"
								placeholder="01"
								className={styles.input}
								onChange={handleChange}></input>
						</h3>

						<h3>
							Altura:
							<input
								name="Altura"
								type="number"
								placeholder="01"
								className={styles.input}
								onChange={handleChange}></input>
						</h3>

						<h3>
							Peso:
							<input
								name="Peso"
								type="number"
								placeholder="01"
								className={styles.input}
								onChange={handleChange}></input>
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
											func={select}
											isSelected={selectedTypes.includes(ID)}
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
					<button
						disabled={!isDataComplete(data)}
						onClick={pokePost}
						className={`${styles.submitButton} ${disabled}`}>
						agregar
					</button>
				</div>
			</div>
		</div>
	)
}

export default Form
