/* eslint-disable react/prop-types */
import styles from './Modal.module.css'

const Modal = ({ title, message }) => {
	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<h5>{message}</h5>
		</div>
	)
}

export default Modal
