import React from 'react'

import CartCardImg from '../../../../shared/assets/images/new1.jpeg'
import svgCart from '../../../../shared/assets/icon/cart.svg'
import svgHeart from '../../../../shared/assets/icon/heart.svg'

import styles from './index.module.scss'

const CartCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.card__top}>
				<h5 className={styles.card__title}>Your Bag</h5>
				<p className={styles.card__description}>
					Items in your bag not reserved- check out now to make them yours.
				</p>
			</div>

			<div className={styles.card__bottom}>
				<a href='#'>
					<img className={styles.card__img} src={CartCardImg} alt='bag' />
				</a>

				<div className={styles.card__content}>
					<h5 className={styles.card__content_title}>
						ADIDAS RUNNING SHOES
					</h5>
					<p className={styles.card__content_desc}>
						Men’s Road Running Shoes
						<br />
						Enamel Blue/ University White
					</p>

					<div className={styles.card__content_size}>
						<p>Size: 8.5</p>
						<p>Quantity 1</p>
					</div>

					<div className={styles.card__content_icons}>
						<a href='#'>
							<img src={svgHeart} alt='' />
						</a>
						<a href='#'>
							<img src={svgCart} alt='' />
						</a>
					</div>
				</div>

				<div className={styles.card__price}>
					<p>$120</p>
				</div>
			</div>
		</div>
	)
}

export default CartCard
