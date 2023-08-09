import styles from './Nav.module.css'
import search from '../../assets/images/search.svg'
import add from '../../assets/images/add.svg'
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
				<select className={styles.selectorId}>
					<option>Sort by ID</option>
					<option value="A">Ascending</option>
					<option value="D">Descending</option>
				</select>
				<select className={styles.selectorSrc}>
					<option>Sort from Src</option>
					<option value="A">Api</option>
					<option value="D">DataBase</option>
				</select>
			</div>
			<Link to="/create">
				<button className={styles.add}>
					<img src={add} alt="search button" />
				</button>
			</Link>
			<Link to="/home">
				<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
			</Link>
		</div>
	)
}

export default Nav
