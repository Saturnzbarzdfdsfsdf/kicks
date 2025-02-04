import { useState } from 'react'
import styles from './index.module.scss'

const sortCategories = [
	'Casual shoes',
	'Runners',
	'Hiking',
	'Sneaker',
	'Basketball',
	'Golf',
	'Outdoor',
]

const FilterSort = () => {
	const [isSortOpen, setIsSortOpen] = useState(true)
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])

	const toggleSort = () => setIsSortOpen(prev => !prev)

	const handleCheckboxChange = (category: string) => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(cat => cat !== category)
				: [...prev, category]
		)
	}

	return (
		<div className={styles.form__sort}>
			<h5 className={styles.form__sort_title} onClick={toggleSort}>
				Sort
				<span className={`${styles.arrow} ${isSortOpen ? styles.open : ''}`} />
			</h5>
			<ul
				className={`${styles.form__sort_list} ${isSortOpen ? styles.open : ''}`}
				aria-hidden={!isSortOpen}
			>
				{sortCategories.map(category => (
					<li key={category}>
						<label className={styles.checkboxLabel}>
							<input
								type='checkbox'
								className={styles.checkbox}
								value={category}
								checked={selectedCategories.includes(category)}
								onChange={() => handleCheckboxChange(category)}
							/>
							<span className={styles.checkboxView} />
							{category}
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilterSort