import React, { useEffect, useState } from 'react'

import { fetchProducts } from 'src/entities/Product/model/productThunk'
import { useAppDispatch, useAppSelector } from 'src/app/Hook'
import {
	selectCurrentPage,
	selectProducts,
	selectProductsLoading,
	selectTotalPages,
} from 'src/entities/Product/model/selectors'

import { SideBar } from '../../widgets/index'

import { ProductCard, Discount, Pagination } from '../../shared/ui/index'

import styles from './index.module.scss'

const Index = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(selectProducts)
	const isLoading = useAppSelector(selectProductsLoading)

	const totalPages = useAppSelector(selectTotalPages)
	const currentPage = useAppSelector(selectCurrentPage)

	const [localPage, setLocalPage] = useState(1)

	useEffect(() => {
		dispatch(fetchProducts({ page: localPage }))
	}, [dispatch, localPage])

	if (isLoading) return <div>Loading...</div>

	if (!Array.isArray(products)) {
		console.error('Products is not an array:', products)
		return <div>Error: Products data is invalid.</div>
	}

	const handlePageChange = (newPage: number) => {
		setLocalPage(newPage)
	}

	return (
		<section className={styles.new}>
			<Discount />

			<div className={styles.bottom}>
				<aside className={styles.sideBar}>
					<div className={styles.sideBar__top}>
						<h3 className={styles.sideBar__title}>Life Style Shoes</h3>
						<p className={styles.sideBar__items}>{products.length} items</p>
					</div>
					<SideBar />
				</aside>
				<div className={styles.grid}>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<div className={styles.pagination}></div>
		</section>
	)
}

export default Index
