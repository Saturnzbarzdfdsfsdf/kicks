import React from 'react'
import { CartCard } from '../../index'
import { NewDrops } from 'src/widgets'

import styles from './index.module.scss'

const Cart = () => {
	return (
		<div className={styles.cart}>
			<div className={styles.cart__top}>
				<div className={styles.cart__top_info}>
					<p>Delivery</p>
					<p>Tomorrow (Wednesday, February 5), or later, from $5</p>
				</div>
				<div className={styles.cart__top_info}>
					<p>Pick up in store</p>
					<p>Today or later, free</p>
				</div>
			</div>

			<div className={styles.cart__content}>
				<div className={styles.cart__content_card}>
					<CartCard />

					<div className={styles.cart__content_order}>
						<h5 className={styles.cart__content_order_title}>Order Summary</h5>
						<div className={styles.cart__content_order_info}>
							<p>1 ITEM</p>
							<span>$136.00</span>
						</div>
						<div className={styles.cart__content_order_info}>
							<p>Delivery</p>
							<span>$6.99</span>
						</div>
						<div className={styles.cart__content_order_Info}>
							<p>Total</p>
							<span>$136.00</span>
						</div>

						<a href='#' className={styles.cart__content_order_btn}>
							pay
						</a>
					</div>
				</div>

				<NewDrops title='You may also like' />
			</div>
		</div>
	)
}

export default Cart
