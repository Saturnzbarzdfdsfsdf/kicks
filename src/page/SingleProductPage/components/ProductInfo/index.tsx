import React from 'react'
import styles from './index.module.scss'
import { FilterColor, FilterSize } from 'src/widgets'
import {type IProducts } from '../../../../entities/Product/model/types'
import { addToCart } from 'src/features/cart/model/cartSlice'
import { useAppDispatch } from 'src/app/Hook'

interface ProductInfoProps {
	product: IProducts 
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
	const { title, price, description } = product
	const dispatch = useAppDispatch()

	const handleAddToCart = (product: IProducts) => {
			dispatch(addToCart({ ...product, quantity: 1 }))
		}


	return (
		<div className={styles.product}>
			<h2 className={styles.product__title}>{title}</h2>{' '}
			{/* Use the product title */}
			<span>${price}</span>
			<FilterColor />
			<FilterSize />
			<div className={styles.product__btn_box}>
				<div>
					<button
						onClick={() => handleAddToCart(product)}
						className={styles.add_bag}
					>
						Add to cart
					</button>
					<a href='#' className={styles.favorite}>
						f
					</a>
				</div>
				<a href='#' className={styles.btn}>
					Buy now
				</a>
			</div>
			<div className={styles.description}>
				<h3 className={styles.description__title}>About the product</h3>
				<p className={styles.description__infoTop}>
					{description}
					<br />
					This product is excluded from all promotional discounts and offers.
				</p>

				<p className={styles.description__info}>
					Pay over time in interest-free installments with Affirm, Klarna or
					Afterpay.
				</p>

				<p className={styles.description__info}>
					Join adiClub to get unlimited free standard shipping, returns, &
					exchanges.
				</p>
			</div>
		</div>
	)
}

export default ProductInfo
