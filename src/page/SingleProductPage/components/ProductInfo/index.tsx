import React from 'react'

import styles from './index.module.scss'
import { FilterColor, FilterSize } from 'src/widgets'

const index = () => {
	return (
		<div className={styles.product}>
			<h2 className={styles.product__title}>ADIDAS X PARLEY RUNNING SHOES</h2>
			<span>$136</span>

			<FilterColor />

			<FilterSize />

			<div className={styles.product__btn_box}>
				<div>
					<a href='#' className={styles.add_bag}>
						Add to bag
					</a>
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
					Shadow Navy / Army Green
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

export default index
