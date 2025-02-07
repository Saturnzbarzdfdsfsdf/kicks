import { type FC } from 'react'

import { removeFromCart, updateQuantity } from '../../model/cartSlice'
import CartCardImg from '../../../../shared/assets/images/new1.jpeg'

import svgCart from '../../../../shared/assets/icon/cart.svg'
import svgHeart from '../../../../shared/assets/icon/heart.svg'

import { useAppDispatch } from 'src/app/Hook'

import styles from './index.module.scss'

import { type ICartItem } from '../../model/cartSlice'

interface CartCardProps {
	cartItems: ICartItem[]
}

const CartCard: FC<CartCardProps> = ({ cartItems }) => {
	const dispatch = useAppDispatch()

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
		<div className={styles.cartCardContainer}>
			{cartItems.length === 0 ? (
				<div>Your cart is empty</div>
			) : (
				cartItems.map(item => (
					<div key={item.id} className={styles.cartCard}>
						<div className={styles.cartCard__top}>
							<h5 className={styles.cartCard__title}>{item.title}</h5>
							<p className={styles.cartCard__description}>
								Items in your bag not reserved- check out now to make them
								yours.
							</p>
						</div>

						<div className={styles.cartCard__bottom}>
							<a href='#' className={styles.cartCard__link}>
								<img
									className={styles.cartCard__image}
									src={item.imageUrl?.[0] || CartCardImg}
									alt={item.title}
								/>
							</a>

							<div className={styles.cartCard__content}>
								<h5 className={styles.cartCard__contentTitle}>{item.title}</h5>
								<p className={styles.cartCard__contentDescription}>
									{item.description}
								</p>

								<div className={styles.cartCard__contentSize}>
									<p>Size: {item.sizes?.[0]}</p>
									<p>Quantity {item.quantity}</p>
								</div>

								<div className={styles.cartCard__contentQuantity}>
									<button
										onClick={() =>
											handleQuantityChange(item.id, item.quantity - 1)
										}
										className={styles.cartCard__quantityButton}
									>
										-
									</button>

									<span className={styles.cartCard__quantityValue}>
										{item.quantity}
									</span>

									<button
										onClick={() =>
											handleQuantityChange(item.id, item.quantity + 1)
										}
										className={styles.cartCard__quantityButton}
									>
										+
									</button>
								</div>

								<div className={styles.cartCard__actions}>
									<button className={styles.cartCard__actionButton}>
										<img src={svgHeart} alt='Add to wishlist' />
									</button>

									<button
										className={styles.cartCard__actionButton}
										onClick={() => handleRemoveFromCart(item.id)}
									>
										<img src={svgCart} alt='Remove from cart' />
									</button>
								</div>
							</div>

							<div className={styles.cartCard__price}>
								<p>${item.price}</p>
							</div>
						</div>
					</div>
				))
			)}
			 {/* <div className={styles.card__total}>Total: ${calculateTotal()}</div>  */}
		</div>
	)
}

export default CartCard
