import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import add from '../../assets/images/add.svg'
import pokelogo from '../../assets/images/logo.png'
import search from '../../assets/images/search.svg'
import trash from '../../assets/images/trash.svg'
import { validateInput } from '../../utils/validations'
import Modal from '../Modal/Modal'
import styles from './Nav.module.css'
import { ordenAlfabetico, clearHome, ordenAtaque, filterSrc } from '../../redux/actions/actions'

const Nav = () => {
	const dispatch = useDispatch()
	const [modal, setModal] = useState({ title: '', message: '' })
	const [showModal, setShowModal] = useState(false)
	const [input, setInput] = useState('')
	const [aux, setAux] = useState(false)
	const navigate = useNavigate()
	const changeHandler = (event) => {
		setInput(event.target.value)
	}
	const orderAlph = (event) => {
		dispatch(ordenAlfabetico(event.target.value))
		setAux(!aux)
	}
	const orderAttack = (event) => {
		dispatch(ordenAtaque(event.target.value))
	}
	const sortSrc = (event) => {
		dispatch(filterSrc(event.target.value))
	}
	const clearFilters = () => {
		dispatch(clearHome())
		setModal({
			title: 'Limpiando',
			message: 'Eliminando filtrados...',
		})
		setShowModal(true)
		setTimeout(() => {
			setInput('')
			setShowModal(false)
			setModal({ title: '', message: '' })
		}, 800)
		navigate('/home')
	}
	const searchByName = async () => {
		if (validateInput(input)) {
			navigate(`/detail/${input}`)
			setInput('')
			return
		}

		const name = input.toLowerCase()
		try {
			const response = await axios(`http://localhost:3001/pokemons/?name=${name}`)
			const id = response.data.ID
			if (response.status < 400) {
				navigate(`/detail/${id}`)
				setInput('')
			}
		} catch (error) {
			setModal({
				title: 'No lo encontré',
				message: 'No tenemos registro de ese Pokémon',
			})
			setShowModal(true)
			setTimeout(() => {
				setInput('')
				setShowModal(false)
				setModal({ title: '', message: '' })
			}, 3000)
		}
	}

	return (
		<div className={styles.container}>
			{showModal && (
				<div className={styles.modal}>
					<Modal title={modal.title} message={modal.message} />
				</div>
			)}
			<input
				value={input}
				onChange={changeHandler}
				type="text"
				placeholder="Introduce tu busqueda!"
				className={styles.input}></input>
			<button className={styles.search} onClick={searchByName}>
				<img src={search} alt="search button" />
			</button>
			<div>
				<select className={styles.selectorName} onChange={orderAlph}>
					<option disabled selected>
						Nombre
					</option>
					<option value="az">A - Z</option>
					<option value="za">Z - A</option>
				</select>
				<select className={styles.selectorAttack} onChange={orderAttack}>
					<option disabled selected>
						Ataque
					</option>
					<option value="menor">Ascendente</option>
					<option value="mayor">Descendente</option>
				</select>
				<select className={styles.selectorSrc} onChange={sortSrc}>
					<option disabled selected>
						Fuente
					</option>
					<option value="true">Api</option>
					<option value="false">DataBase</option>
				</select>
			</div>
			<button className={styles.add} onClick={clearFilters}>
				<img src={trash} alt="search button" />
				<tooltip>Limpiar filtros</tooltip>
			</button>
			<Link to="/create">
				<button className={styles.add}>
					<img src={add} alt="search button" />
					<tooltip>Crear Pokemon</tooltip>
				</button>
			</Link>
			<Link to="/home">
				<img onClick={clearFilters} className={styles.logo} src={pokelogo} alt="logo pokemon" />
			</Link>
		</div>
	)
}

export default Nav
