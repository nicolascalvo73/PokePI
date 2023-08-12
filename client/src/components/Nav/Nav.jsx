import styles from './Nav.module.css'
import search from '../../assets/images/search.svg'
import add from '../../assets/images/add.svg'
import trash from '../../assets/images/trash.svg'
import pokelogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
	const [input, setInput] = useState('')
	const changeHandler = (event) => {
		setInput(event.target.value)
	}
	return (
		<div className={styles.container}>
			<input
				onChange={changeHandler}
				type="text"
				placeholder="Introduce tu busqueda!"
				className={styles.input}></input>
			<Link to={`detail/${input}`}>
				<button className={styles.search}>
					<img src={search} alt="search button" />
				</button>
			</Link>
			<div>
				<select className={styles.selectorName}>
					<option>Nombre</option>
					<option value="A">Ascendente</option>
					<option value="D">Descendente</option>
				</select>
				<select className={styles.selectorAttack}>
					<option>Ataque</option>
					<option value="A">Ascendente</option>
					<option value="D">Descendente</option>
				</select>
				<select className={styles.selectorSrc}>
					<option>Fuente</option>
					<option value="A">Api</option>
					<option value="D">DataBase</option>
				</select>
			</div>
			<button className={styles.add}>
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
				<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
			</Link>
		</div>
	)
}

export default Nav
