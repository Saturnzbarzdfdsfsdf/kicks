

import { Reviews } from '../../features/reviews/index'
import { CategoriesSlider } from '../../entities/index'
import { DoItSlider, NewDrops } from '../../widgets/index'

import styles from './index.module.scss'
import { NewProduct } from 'src/features'

const index = () => {
	return (
		<div className={styles.container}>
			<DoItSlider />
			<NewDrops />
			<CategoriesSlider />
			<Reviews />
	
		</div>
	)
}

export default index
