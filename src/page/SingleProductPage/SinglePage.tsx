import { ProductImages, ProductInfo } from './components/index'
import { NewDrops } from 'src/widgets'

import styles from './SinglePage.module.scss'

const index = () => {
	return (
		<div className={styles.product}>
			<div className={styles.product__box}>
				<div className={styles.product__img}>
					<ProductImages />
				</div>

				<div className={styles.product__info}>
					<ProductInfo />
				</div>
			</div>

			<NewDrops title={'You may also like'} />
		</div>
	)
}

export default index
