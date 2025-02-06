import { Reviews } from '../../features/reviews/index'
import { useEffect } from 'react'
import { CategoriesSlider } from '../../entities/index'

import { fetchProducts } from 'src/entities/Product/model/productThunk'
import { selectProducts } from 'src/entities/Product/model/selectors'
import { useAppDispatch, useAppSelector } from 'src/app/Hook/index'

import { DoItSlider, NewDrops } from '../../widgets/index'

import styles from './index.module.scss'

// const slides = [
// 	{ id: 1, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 2, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 3, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 4, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 5, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 6, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 7, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// 	{ id: 8, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
// ]

// import slide1 from '../../shared/assets/images/new1.jpeg'

const index = () => {
	const dispatch = useAppDispatch()
	const { products, loading, error } = useAppSelector(selectProducts)
	
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])
	
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>

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
