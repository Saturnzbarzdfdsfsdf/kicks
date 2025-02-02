
import { Header, Footer } from '../../shared/components/index'
import { Reviews } from '../../features/reviews/index'
import { CategoriesSlider } from '../../entities/index'
import { DoItSlider, NewDrops } from '../../widgets/index'

import styles from './index.module.scss'

const index = () => {
	return (
		<div className={styles.container}>
			<Header />
			<DoItSlider />
			<NewDrops />
			<CategoriesSlider />
			<Reviews />
			<Footer />
		</div>
	)
}

export default index
