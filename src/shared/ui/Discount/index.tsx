
import sale from '../../../shared/assets/images/30.png'
import styles from './index.module.scss'
const index = () => {
	return (
		<>
			<div className={styles.top}>
				<div className={styles.top__sale}>
					<p>Limited time only</p>
					<h2 className={styles.top__sale_title}>Get 30% off</h2>
					<p>
						Sneakers made with your comfort in mind so you can put all of your
						focus into your next session.
					</p>
				</div>
				<img src={sale} alt='sale-30%' />
			</div>
		</>
	)
}

export default index
