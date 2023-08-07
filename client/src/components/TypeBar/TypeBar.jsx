import { Link } from 'react-router-dom'
import styles from './TypeBar.module.css'
import normal from '../../assets/images/types/normal.svg'
import fighting from '../../assets/images/types/fighting.svg'
import flying from '../../assets/images/types/fly.svg'
import poison from '../../assets/images/types/poison.svg'
import ground from '../../assets/images/types/ground.svg'
import rock from '../../assets/images/types/rock.svg'
import bug from '../../assets/images/types/bug-solid.svg'
import ghost from '../../assets/images/types/ghost-solid.svg'
import steel from '../../assets/images/types/steel.svg'
import fire from '../../assets/images/types/fire-solid.svg'
import water from '../../assets/images/types/water.svg'
import grass from '../../assets/images/types/grass.svg'
import electric from '../../assets/images/types/electric.svg'
import psychic from '../../assets/images/types/psychic.svg'
import ice from '../../assets/images/types/ice.svg'
import dragon from '../../assets/images/types/dragon.svg'
import dark from '../../assets/images/types/dark.svg'
import fairy from '../../assets/images/types/fairy.svg'
import unknown from '../../assets/images/types/unknown.svg'
import shadow from '../../assets/images/types/shadow.svg'

const TypeBar = () => {
	return (
		<div className={styles.container}>
			<Link>
				<button className={styles.button}>
					<img src={normal} alt="type icon" />
					<tooltip>normal</tooltip>
				</button>
			</Link>

			<Link>
				<button className={styles.button}>
					<img src={fighting} alt="type icon" />
					<tooltip>fighting</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={flying} alt="type icon" />
					<tooltip>flying</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={poison} alt="type icon" />
					<tooltip>poison</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={ground} alt="type icon" />
					<tooltip>ground</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={rock} alt="type icon" />
					<tooltip>rock</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={bug} alt="type icon" />
					<tooltip>bug</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={ghost} alt="type icon" />
					<tooltip>ghost</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={steel} alt="type icon" />
					<tooltip>steel</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={fire} alt="type icon" />
					<tooltip>fire</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={water} alt="type icon" />
					<tooltip>water</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={grass} alt="type icon" />
					<tooltip>grass</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={electric} alt="type icon" />
					<tooltip>electric</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={psychic} alt="type icon" />
					<tooltip>psychic</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={ice} alt="type icon" />
					<tooltip>ice</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={dragon} alt="normal icon" />
					<tooltip>dragon</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={dark} alt="normal icon" />
					<tooltip>dark</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={fairy} alt="type icon" />
					<tooltip>fairy</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={unknown} alt="type icon" />
					<tooltip>unknown</tooltip>
				</button>
			</Link>
			<Link>
				<button className={styles.button}>
					<img src={shadow} alt="type icon" />
					<tooltip>shadow</tooltip>
				</button>
			</Link>
		</div>
	)
}

export default TypeBar
