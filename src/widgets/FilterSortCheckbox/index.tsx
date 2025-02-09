import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/Hook'

import { selectProducts } from 'src/entities/Product/model/selectors'

import { selectSelectedCategories } from 'src/features/search/model/filterSelectors'
import { setSelectedCategories } from 'src/features/search/model/filterSlice'

import type { FC } from 'react'

import styles from './index.module.scss'

const FilterSort: FC = () => {
	const [isSortOpen, setIsSortOpen] = useState(true)
	const selectedCategories = useAppSelector(selectSelectedCategories)
	const products = useAppSelector(selectProducts)
	const dispatch = useAppDispatch()

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
				{products.map(product => (
					<li key={product.id}>
						<label className={styles.checkboxLabel}>
							<input
								type='checkbox'
								className={styles.checkbox}
								value={product.title}
								checked={selectedCategories.includes(product.title)}
								onChange={() => handleCheckboxChange(product.title)}
							/>
							<span className={styles.checkboxView} />
							{product.title}
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilterSort
