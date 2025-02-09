import { Link } from 'react-router-dom'

import useAddToCart from 'src/shared/hooks/useAddToCart'

import type { FC } from 'react'
import type { IProducts } from '../../../entities/Product/model/types'

import styles from './index.module.scss'

type TPropsProductCard = {
	product: IProducts
}

const Index: FC<TPropsProductCard> = ({ product }) => {
	const { handleAddToCart } = useAddToCart()

	return (
		<div className={styles.wrapper}>
			<div className={styles.swiperWrapper}>
				<div className={styles.swiperSlide}>
					<Link to={`/single/${product.id}`}>
						{product.imageUrl?.[0] && (
							<img src={product.imageUrl[0]} alt={`Product ${product.title}`} />
						)}
						<h3 className={styles.titleCard}>{product.title}</h3>
						<p className={styles.desc}>{product.description}</p>
					</Link>

					<div className={styles.btnBox}>
						<a
							className={styles.sliderBtn}
							href='#'
							onClick={e => e.preventDefault()}
						>
							buy
						</a>
						<button
							className={styles.sliderBtn}
							onClick={() => handleAddToCart(product)}
						>
							cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index
