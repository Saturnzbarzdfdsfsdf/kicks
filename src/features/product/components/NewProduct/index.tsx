import React from 'react'

import { ProductCard, SideBar } from 'src/features'
import sale from '../../../../shared/assets/images/30.png'

import styles from './index.module.scss'

const index = () => {
	return (
		<section className={styles.new}>
			<div className={styles.top}>
				<div className={styles.top__sale}>
					<p>Limited time only</p>
					<h2 className={styles.top__sale_title}>Get 30% off</h2>
					<p>
						Sneakers made with your comfort in mind so you can put all of your
						focus into your next session.
					</p>
				</div>

				<img src={sale} alt='sale-30%' />
			</div>

			<div className={styles.bottom}>
				<aside className={styles.sideBar}>
					<div className={styles.sideBar__top}>
						<h3 className={styles.sideBar__title}>Life Style Shoes</h3>
						<p className={styles.sideBar__items}>122 items</p>
					</div>
					<SideBar />

				</aside>
				<div className={styles.grid}>
					<ProductCard />
				</div>
			</div>
			<div className={styles.pagination}>
				<div className={styles.dots}>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</div>
			</div>
		</section>
	)
}

export default index
