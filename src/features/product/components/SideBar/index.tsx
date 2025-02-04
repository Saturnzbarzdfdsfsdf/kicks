import React, { useState } from 'react'

import { PriceFilter } from 'src/widgets'
import { FilterSort, FilterColor, FilterSize } from 'src/widgets/index'

import styles from './index.module.scss'

const SideBar = () => {

	return (
		<>
			<h4 className={styles.SideBar__title}>Filters</h4>

			<form className={styles.SideBar__form}>
				<FilterSize />

				<FilterColor />
				<FilterSort />

				<PriceFilter />
			</form>
		</>
	)
}

export default SideBar
