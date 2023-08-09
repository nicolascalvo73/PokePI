import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TypeButton from '../TypeButton/TypeButton'
import styles from './TypeBar.module.css'
import { getAllTypes } from '../../redux/actions/actions'

const TypeBar = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllTypes())
	}, [dispatch])
	const types = useSelector((state) => state.types)

	return (
		<div className={styles.container}>
			{types.map(({ ID, Nombre }) => {
				return <TypeButton key={ID} id={ID} type={Nombre} />
			})}
		</div>
	)
}

export default TypeBar
