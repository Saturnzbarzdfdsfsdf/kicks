import React from 'react'
import styles from './index.module.scss' // Создайте файл ThankYou.module.scss

const ThankYou = () => {
	return (
		<div className={styles.thankYou}>
			<div>
				<h2 className={styles.thankYou__title}>Thank You!</h2>
				<p className={styles.thankYou__message}>
					Your order has been successfully created, we appreciate it, we are
					grateful that you chose us!
				</p>
				<p className={styles.thankYou__orderDetails}>
					You will receive an email with your order details shortly.
				</p>
				<p className={styles.smile}>😇</p>
			</div>
		</div>
	)
}

export default ThankYou
