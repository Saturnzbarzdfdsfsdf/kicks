import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/Hook'


import { toggleSelectedSize } from 'src/features/search/model/filterSlice'

import { selectProducts } from 'src/entities/Product/model/selectors'
import { selectSelectedSizes } from 'src/features/search/model/filterSelectors'

import styles from './index.module.scss'

const FilterSize = () => {
	const [isSizeOpen, setSizeOpen] = useState(false)

	const dispatch = useAppDispatch()
	const products = useAppSelector(selectProducts)
	const selectedSizes = useAppSelector(selectSelectedSizes)

	const toggleSizeOpen = () => setSizeOpen(prev => !prev)

	const availableSizes = Array.from(
		new Set(products.flatMap(product => product.sizes || []))
	).sort((a, b) => a - b)

	const handleSizeClick = (size: number) => {
		dispatch(toggleSelectedSize(size))
	}

	return (
		<div className={styles.form__size}>
			<h5
				className={`${styles.form__size_title} ${
					isSizeOpen ? styles.open : ''
				}`}
				onClick={toggleSizeOpen}
			>
				Size
				<span className={`${styles.arrow} ${isSizeOpen ? styles.open : ''}`} />
			</h5>
			<ul
				className={`${styles.form__size_list} ${isSizeOpen ? styles.open : ''}`}
				aria-hidden={!isSizeOpen}
			>
				{availableSizes.map(size => (
					<li
						key={size}
						className={selectedSizes.includes(size) ? styles.selected : ''}
						onClick={() => handleSizeClick(size)}
					>
						{size}
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilterSize


