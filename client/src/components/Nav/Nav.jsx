import styles from './Nav.module.css'
import search from '../../assets/images/search.svg'
import add from '../../assets/images/add.svg'
import pokelogo from '../../assets/images/logo.png'

const Nav = () => {
	return (
		<div className={styles.container}>
			<input type="text" placeholder="Introduce tu busqueda!" className={styles.input}></input>
			<button className={styles.search}>
				<img src={search} alt="search button" />
			</button>
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
			<button className={styles.add}>
				<img src={add} alt="search button" />
			</button>
			<img className={styles.logo} src={pokelogo} alt="logo pokemon" />
		</div>
	)
}

export default Nav
