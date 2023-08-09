import styles from './TypeBar.module.css'
import TypeButton from '../TypeButton/TypeButton'

const mockedTypes = [
	{
		ID: 1,
		Nombre: 'normal',
	},
	{
		ID: 2,
		Nombre: 'fighting',
	},
	{
		ID: 3,
		Nombre: 'flying',
	},
	{
		ID: 4,
		Nombre: 'poison',
	},
	{
		ID: 5,
		Nombre: 'ground',
	},
	{
		ID: 6,
		Nombre: 'rock',
	},
	{
		ID: 7,
		Nombre: 'bug',
	},
	{
		ID: 8,
		Nombre: 'ghost',
	},
	{
		ID: 9,
		Nombre: 'steel',
	},
	{
		ID: 10,
		Nombre: 'fire',
	},
	{
		ID: 11,
		Nombre: 'water',
	},
	{
		ID: 12,
		Nombre: 'grass',
	},
	{
		ID: 13,
		Nombre: 'electric',
	},
	{
		ID: 14,
		Nombre: 'psychic',
	},
	{
		ID: 15,
		Nombre: 'ice',
	},
	{
		ID: 16,
		Nombre: 'dragon',
	},
	{
		ID: 17,
		Nombre: 'dark',
	},
	{
		ID: 18,
		Nombre: 'fairy',
	},
	{
		ID: 19,
		Nombre: 'unknown',
	},
	{
		ID: 20,
		Nombre: 'shadow',
	},
]

const TypeBar = () => {
	return (
		<div className={styles.container}>
			{mockedTypes.map(({ ID, Nombre }) => {
				return <TypeButton key={ID} id={ID} type={Nombre} />
			})}
		</div>
	)
}

export default TypeBar
