import React, { type FC } from 'react'
import styles from './index.module.scss'
import { type IProducts } from '../../../../entities/Product/model/types'

type TPropsProductCard = {
	product: IProducts
}

const ProductCard: FC<TPropsProductCard> = ({ product }) => {


	return (
		<div className={styles.wrapper}>
			<div className={styles.swiperWrapper}>
				<div className={styles.swiperSlide}>
					<a href='#'>
						{product.imageUrl?.[0] && (
							<img
								src={product.imageUrl[0]}
								alt={`Product ${product.title}`}
							/>
						)}
						<p className={styles.titleCard}>{product.title}</p>
					</a>
					<a
						className={styles.sliderBtn}
						href='#'
						onClick={e => e.preventDefault()}
					>
						buy
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
