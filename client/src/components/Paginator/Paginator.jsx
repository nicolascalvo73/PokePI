import styles from './Paginator.module.css'
import Card from '../Card/Card'
import prev from '../../assets/images/prev.svg'
import next from '../../assets/images/next.svg'

const Paginator = () => {
	const pokes = [
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
		{
			name: 'Ditto',
			types: [1, 2],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
		},
	]
	return (
		<div className={styles.container}>
			<button className={`${styles.button} ${styles.prev}`}>
				<img src={prev} alt="type icon" />
				<tooltip>anteriores</tooltip>
			</button>
			{pokes.map(({ name, types, img }, index) => {
				return <Card key={index} id={index} name={name} types={types} img={img} />
			})}
			<button className={`${styles.next} ${styles.button}`}>
				<img src={next} alt="type icon" />
				<tooltip>siguientes</tooltip>
			</button>
		</div>
	)
}

export default Paginator
