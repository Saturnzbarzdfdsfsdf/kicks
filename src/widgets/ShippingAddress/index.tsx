import { Link } from 'react-router-dom'

import { useAppDispatch } from 'src/app/Hook'
import { CartContentOrder } from 'src/features/cart/components'
import { clearCart } from 'src/features/cart/model/cartSlice'

import styles from './index.module.scss'

const index = () => {
	const dispatch = useAppDispatch()

	const handleClearCart = () => {
		dispatch(clearCart())
	}

	return (
		<div className={styles.container}>
			<div className={styles.shipping}>
				<div className={styles.shipping__left}>
					<div className={styles.contact}>
						<h2 className={styles.contact__details_title}>Contact Details</h2>
						<p className={styles.contact__details_description}>
							We will use these details to keep you informed about your
							delivery.
						</p>
						<input
							type='number'
							placeholder='Your Number'
							className={styles.contact__details_input}
						/>
					</div>

					<div className={styles.address}>
						<h2 className={styles.address__title}>Shipping Address</h2>
						<fieldset className={styles.address__fieldset}>
							<div className={styles.address__fieldset_top}>
								<input
									type='text'
									className={styles.address__input}
									placeholder='Your Name'
								/>
								<input
									type='text'
									className={styles.address__input}
									placeholder='Your Last Name'
								/>
							</div>

							<input
								type='text'
								className={styles.address__input}
								placeholder='Your Address'
							/>
							<input
								type='text'
								className={styles.address__input}
								placeholder='Your-e-mail@gmail'
							/>
						</fieldset>
					</div>

					<div className={styles.delivery__options}>
						<h2 className={styles.delivery__options_title}>Delivery Options</h2>

						<div className={styles.delivery__options_option}>
							<h4 className={styles.delivery__options_option_title}>
								Standard Delivery
							</h4>
							<p className={styles.delivery__options_option_description}>
								Enter your address to see when you’ll get your order
							</p>

							<p className={styles.delivery__options_option_price}>
								1% of the order
							</p>
						</div>

						<div className={styles.delivery__options_option}>
							<h4 className={styles.delivery__options_option_title}>
								Collect in store
							</h4>
							<p className={styles.delivery__options_option_description}>
								Pay now, collect in store
							</p>
							<p className={styles.delivery__options_option_price}>Free</p>
						</div>
					</div>

					<fieldset className={styles.checkboxes}>
						<label htmlFor='information'>
							<input
								id='information'
								type='checkbox'
								className={styles.checkbox}
							/>
							My billing and delivery information are the same{' '}
						</label>

						<label htmlFor='year-old'>
							<input
								id='year-old'
								type='checkbox'
								className={styles.checkbox}
							/>
							I’m 18+ year old
						</label>

						<label htmlFor='news'>
							<p>Also want product updates with our newsletter?</p>
							<input id='news' type='checkbox' className={styles.checkbox} />
							Yes, I’d like to receive emails about exclusive sales and more.
						</label>

						<Link to='thanks'>
							<input
								onClick={handleClearCart}
								type='submit'
								value='place an order'
								className={styles.submit}
							/>
						</Link>
					</fieldset>
				</div>

				<div className={styles.shipping__right}>
					<CartContentOrder showPayButton={false} />
				</div>
			</div>
		</div>
	)
}

export default index
