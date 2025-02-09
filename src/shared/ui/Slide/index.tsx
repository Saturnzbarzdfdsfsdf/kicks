import { Link } from 'react-router-dom'

import useAddToCart from 'src/shared/hooks/useAddToCart'

import type { FC } from 'react'
import type { IProducts } from 'src/entities/Product/model/types'

import styles from './index.module.scss'

interface IPropsSlide {
	product: IProducts
}

const Slide: FC<IPropsSlide> = ({ product }) => {
	const { handleAddToCart } = useAddToCart()

	const { imageUrl, title, description } = product

	return (
		<div className={styles.slideWrapper}>
			<Link to={`/single/${product.id}`}>
				{imageUrl && imageUrl.length > 0 ? (
					<img src={imageUrl[0]} alt='images shoes' />
				) : (
					<div>No Image</div> //
				)}
				<p className={styles.titleCard}>{title}</p>
				<p className={styles.descriptionCard}>{description}</p>
			</Link>
			<button
				onClick={() => handleAddToCart(product)}
				className={styles.sliderBtn}
			>
				add to cart
			</button>
		</div>
	)
}

export default Slide
