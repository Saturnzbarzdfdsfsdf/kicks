import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/Hook'

import {
	selectGroupedTitles,
	selectSelectedCategories,
} from 'src/features/search/model/filterSelectors'
import { setSelectedCategories } from 'src/features/search/model/filterSlice'

import type { FC } from 'react'

import styles from './index.module.scss'

const FilterSort: FC = () => {
	const dispatch = useAppDispatch()
	const [isSortOpen, setIsSortOpen] = useState(true)

	const selectedCategories = useAppSelector(selectSelectedCategories)
	const productTitles = useAppSelector(selectGroupedTitles)

	const toggleSort = () => setIsSortOpen(prev => !prev)

	const handleCheckboxChange = (title: string) => {
		const isCategorySelected = selectedCategories.includes(title)
		if (isCategorySelected) {
			dispatch(
				setSelectedCategories(selectedCategories.filter(cat => cat !== title))
			)
		} else {
			dispatch(setSelectedCategories([...selectedCategories, title]))
		}
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
				{productTitles.map(title => (
					<li key={title}>
						<label className={styles.checkboxLabel}>
							<input
								type='checkbox'
								className={styles.checkbox}
								value={title}
								checked={selectedCategories.includes(title)}
								onChange={() => handleCheckboxChange(title)}
							/>
							<span className={styles.checkboxView} />
							{title}
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilterSort
