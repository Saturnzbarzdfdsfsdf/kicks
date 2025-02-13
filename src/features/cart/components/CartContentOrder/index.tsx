import { Link } from 'react-router-dom'

import { useAppSelector } from 'src/app/Hook'
import { selectTotalItems, selectTotalPrice } from '../../model/selectors'

interface ICartContentOrderProps {
	showPayButton?: boolean 
}


import styles from './index.module.scss'
import type { FC } from 'react'

const CartContentOrder: FC<ICartContentOrderProps> = ({ showPayButton }) => {
	const totalItems = useAppSelector(selectTotalItems)
	const totalPrice = useAppSelector(selectTotalPrice)

	return (
		<div className={styles.cart__content_order}>
			<h5 className={styles.cart__content_order_title}>Order Summary</h5>
			<div className={styles.cart__content_order_info}>
				<p>{totalItems} ITEM</p>
				<span>${totalPrice}</span>
			</div>
			<div className={styles.cart__content_order_info}>
				<p>Delivery</p>
				<span>${(totalPrice / 100).toFixed(2)}</span>
			</div>

			{showPayButton && ( // Условный рендеринг кнопки
				<Link to='/cart/shipping' className={styles.cart__content_order_btn}>
					pay
				</Link>
			)}
		</div>
	)
}

export default CartContentOrder
