import  { type FC } from 'react'

import { removeFromCart, updateQuantity } from '../../model/cartSlice'
import CartCardImg from '../../../../shared/assets/images/new1.jpeg'

import svgCart from '../../../../shared/assets/icon/cart.svg'
import svgHeart from '../../../../shared/assets/icon/heart.svg'

import { useAppDispatch, useAppSelector } from 'src/app/Hook'
import { selectCartItems } from '../../model/selectors'

import styles from './index.module.scss'
// import { type IProducts } from '../../model/cartSlice' // Import the interface

const CartCard: FC = () => {
	const dispatch = useAppDispatch()
	const cartItems = useAppSelector(selectCartItems)

	const handleRemoveFromCart = (id: number) => {
		dispatch(removeFromCart(id))
	}

	const handleQuantityChange = (id: number, quantity: number) => {
		dispatch(updateQuantity({ id, quantity }))
	}

	const calculateTotal = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2)
	}

	return (
		<div className={styles.cardContainer}>
			{cartItems.length === 0 ? (
				<div>Your cart is empty</div>
			) : (
				cartItems.map(item => (
					<div key={item.id} className={styles.card}>
						<div className={styles.card__top}>
							<h5 className={styles.card__title}>Your Bag</h5>
							<p className={styles.card__description}>
								Items in your bag not reserved- check out now to make them
								yours.
							</p>
						</div>

						<div className={styles.card__bottom}>
							<a href='#'>
								<img
									className={styles.card__img}
									src={item.imageUrl?.[0] || CartCardImg} // Use the item's image
									alt={item.title}
								/>
							</a>

							<div className={styles.card__content}>
								<h5 className={styles.card__content_title}>{item.title}</h5>
								<p className={styles.card__content_desc}>
									{/* Men’s Road Running Shoes
                                    <br />
                                    Enamel Blue/ University White */}
								</p>

								<div className={styles.card__content_size}>
									<p>Size: {item.sizes?.[0]}</p>
									<p>Quantity {item.quantity}</p>
								</div>

								<div className={styles.card__content_icons}>
									<button
										onClick={() =>
											handleQuantityChange(item.id, item.quantity - 1)
										}
										className={styles.quantityButton}
									>
										-
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() =>
											handleQuantityChange(item.id, item.quantity + 1)
										}
										className={styles.quantityButton}
									>
										+
									</button>
								</div>
							</div>

							<div className={styles.card__price}>
								<p>${item.price}</p>
							</div>

							<button
								onClick={() => handleRemoveFromCart(item.id)}
								className={styles.removeButton}
							>
								Remove
							</button>
						</div>
					</div>
				))
			)}
			<div className={styles.card__total}>Total: ${calculateTotal()}</div>
		</div>
	)
}

export default CartCard

