import { useParams } from 'react-router-dom'

import { ProductImages, ProductInfo } from './components/index'
import { NewDrops } from 'src/widgets'
import { useAppSelector } from 'src/app/Hook'
import { selectProducts } from 'src/entities/Product/model/selectors'

import styles from './SinglePage.module.scss'

const SinglePage = () => {
	const { products } = useAppSelector(selectProducts)
	const { id } = useParams() 

  const product = products.find(p => p.id.toString() === id)

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<div className={styles.product}>
			<div className={styles.product__box}>
				<div className={styles.product__img}>
					<ProductImages product={product} /> 
				</div>
				<div className={styles.product__info}>
					<ProductInfo product={product} />
				</div>
			</div>

			<NewDrops products={products} title={'You may also like'} />
		</div>
	)
}

export default SinglePage
