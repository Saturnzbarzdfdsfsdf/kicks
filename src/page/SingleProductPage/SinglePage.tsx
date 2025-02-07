import { ProductImages, ProductInfo } from './components/index'
import { NewDrops } from 'src/widgets'

// import { useParams } from 'react-router-dom'
import styles from './SinglePage.module.scss'
import { useAppSelector } from 'src/app/Hook'
import { selectProducts } from 'src/entities/Product/model/selectors'

const index = () => {
	const { products } = useAppSelector(selectProducts)
//  const { id } = useParams() // Получаем ID продукта из URL

//  // Находим продукт по ID
//  const product = products.find(p => p.id === id)

//  // Если продукт не найден, отображаем сообщение об ошибке
//  if (!product) {
// 		return <div>Product not found</div>
//  }
	
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

			<NewDrops products={products} title={'You may also like'} />
		</div>
	)
}

export default index
