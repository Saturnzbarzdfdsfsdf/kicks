import { useState } from 'react'

import styles from './index.module.scss'

const FilterColor = () => {
	const [isColorOpen, setColorOpen] = useState(false)

	const toggleColor = () => setColorOpen(!isColorOpen)

	return (
		<>
			<div className={styles.form__color}>
				<h5
					className={`${styles.form__color_title} ${
						isColorOpen ? styles.open : ''
					}`}
					onClick={toggleColor}
				>
					Color
					<span
						className={`${styles.arrow} ${isColorOpen ? styles.open : ''}`}
					/>
				</h5>

				<ul
					className={`${styles.form__color_list} ${
						isColorOpen ? styles.open : ''
					}`}
					aria-hidden={!isColorOpen}
				>
					<li className={styles.black}></li>
					<li className={styles.blue}></li>
					<li className={styles.green}></li>
					<li className={styles.yellow}></li>
				</ul>
			</div>
		</>
	)
}

export default FilterColor
