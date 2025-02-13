import { CartCard } from '../../index'
import { NewDrops } from 'src/widgets'

import { CartContentOrder } from '../index'

import styles from './index.module.scss'
import { useAppSelector } from 'src/app/Hook'
import { selectProducts } from 'src/entities/Product/model/selectors'
import { selectCartItems } from '../../model/selectors'

const Cart = () => {
	const products = useAppSelector(selectProducts)
	const cartItems = useAppSelector(selectCartItems)

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

							<CartContentOrder showPayButton={true} />
						</div>

						<NewDrops products={products} title='You may also like' />
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
