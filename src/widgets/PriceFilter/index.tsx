import { useState } from 'react'
import styles from './index.module.scss'

const PriceFilter = () => {
	const [priceRange, setPriceRange] = useState([0, 1000])
	const [isPriceOpen, setIsPriceOpen] = useState(false)

	const toggleSort = () => setIsPriceOpen(prev => !prev)

	const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(e.target.value), 1000) 
		setPriceRange([priceRange[0], value])
	}

	return (
		<div className={styles.form__price}>
			<h5
				className={styles.form__price_title}
				onClick={toggleSort}
				aria-expanded={isPriceOpen}
			>
				Price
				<span className={`${styles.arrow} ${isPriceOpen ? styles.open : ''}`} />
			</h5>

			<fieldset
				className={`${styles.form__price_fieldset} ${
					isPriceOpen ? styles.open : ''
				}`}
				aria-hidden={!isPriceOpen}
			>
				<input
					className={styles.form__price_input}
					type='number'
					id='price-max'
					value={priceRange[1]}
					onChange={handleMaxPriceChange}
					min='0'
					max='1000'
				/>

				<div className={styles.slider__container}>
					<input
						className={styles.slider__container_range}
						type='range'
						min='0'
						max='1000'
						step='1'
						value={priceRange[1]}
						onChange={handleMaxPriceChange}
					/>
				</div>
			</fieldset>
		</div>
	)
}

export default PriceFilter
