import { Reviews } from '../../features/reviews/index'
import { useEffect } from 'react'
import { CategoriesSlider } from '../../entities/index'

import { fetchProducts } from 'src/entities/Product/model/productThunk'

import {
	selectProducts,
	selectProductsLoading,
} from 'src/entities/Product/model/selectors'
import { useAppDispatch, useAppSelector } from 'src/app/Hook/index'

import { DoItSlider, NewDrops } from '../../widgets/index'

import styles from './index.module.scss'

const index = () => {
	const dispatch = useAppDispatch()

	const products = useAppSelector(selectProducts)
	const loading = useAppSelector(selectProductsLoading)

	useEffect(() => {
		dispatch(fetchProducts(products))
	}, [dispatch])

	if (loading) return <div>Loading...</div>

	return (
		<div className={styles.container}>
			<DoItSlider />
			<NewDrops products={products} title='New Drops' />
			<CategoriesSlider />
			<Reviews />
		</div>
	)
}

export default index
