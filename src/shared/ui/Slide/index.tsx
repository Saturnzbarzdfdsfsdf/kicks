import { Link } from 'react-router-dom'
import type { FC } from 'react'
import type { IProducts } from 'src/entities/Product/model/types'
import { addToCart } from '../../../features/cart/model/cartSlice'
import { useAppDispatch } from 'src/app/Hook'

import styles from './index.module.scss'

interface IPropsSlide {
	product: IProducts
}

const Slide: FC<IPropsSlide> = ({ product }) => {
	const { id, imageUrl, title, description } = product

	const dispatch = useAppDispatch()

	const handleAddToCart = (product: IProducts) => {
		dispatch(addToCart({ ...product, quantity: 1 }))
	}

	return (
		<div className={styles.slideWrapper}>
			<Link to='single'>
				{imageUrl && imageUrl.length > 0 ? (
					<img src={imageUrl[0]} alt={`Slide ${id}`} />
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
