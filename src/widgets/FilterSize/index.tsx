import { useState } from 'react'

import styles from './index.module.scss'

const FilterSize = () => {
	const [isSizeOpen, setSizeOpen] = useState(false)
	const toggleSize = () => setSizeOpen(!isSizeOpen)

	return (
		<>
			<div className={styles.form__size}>
				<h5
					className={`${styles.form__size_title} ${
						isSizeOpen ? styles.open : ''
					}`}
					onClick={toggleSize}
				>
					Size
					<span
						className={`${styles.arrow} ${isSizeOpen ? styles.open : ''}`}
					/>
				</h5>
				<ul
					className={`${styles.form__size_list} ${
						isSizeOpen ? styles.open : ''
					}`}
					aria-hidden={!isSizeOpen}
				>
					<li>39</li>
					<li>40</li>
					<li>41</li>
					<li>42</li>
					<li>43</li>
					<li>44</li>
				</ul>
			</div>
		</>
	)
}

export default FilterSize
