
import { Routes, Route } from 'react-router-dom'

import { HomePage, NotFoundPage, SingleProductPage } from 'src/page'
import { Cart, NewProduct, ProductList } from '../../features/index'

import Layout from '../layout'


const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='cart' element={<Cart />} />
				<Route path='new' element={<NewProduct />} />
				<Route path='shoes' element={<ProductList />} />
				<Route path='single/:id' element={<SingleProductPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
