import { Link } from 'react-router'
import { CartCard } from '../../index'
import { NewDrops } from 'src/widgets'

import styles from './index.module.scss'
import { useAppSelector } from 'src/app/Hook'
import { selectProducts } from 'src/entities/Product/model/selectors'
import {
	selectCartItems,
	selectTotalItems,
	selectTotalPrice,
} from '../../model/selectors'

const Cart = () => {

	const products = useAppSelector(selectProducts)
	const cartItems = useAppSelector(selectCartItems)
	
	const totalPrice = useAppSelector(selectTotalPrice)
	const totalItems = useAppSelector(selectTotalItems)


	return (
		<div className={styles.cart}>
			{cartItems.length === 0 ? (
				<div className={styles.emptyCart}>
					<h2>Your cart is empty</h2>
					<p>Add products to your cart to proceed to checkout.</p>
				</div>
			) : (
				<>
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
							<CartCard cartItems={cartItems} />

							<div className={styles.cart__content_order}>
								<h5 className={styles.cart__content_order_title}>
									Order Summary
								</h5>
								<div className={styles.cart__content_order_info}>
									<p>{totalItems} ITEM</p>
									<span>${totalPrice}</span>
								</div>
								<div className={styles.cart__content_order_info}>
									<p>Delivery</p>
									<span>${(totalPrice / 100).toFixed(2)}</span>
								</div>

								<Link
									to='/cart/shipping'
									className={styles.cart__content_order_btn}
								>
									pay
								</Link>
							</div>
						</div>

						<NewDrops products={products} title='You may also like' />
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
