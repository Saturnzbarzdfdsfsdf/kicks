import { Routes, Route } from 'react-router-dom'

import {
	HomePage,
	NotFoundPage,
	SingleProductPage,
	SneakersPage,
} from 'src/page'

import { Cart } from '../../features/index'
import { ShippingAddress } from 'src/widgets'

import Layout from '../layout'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='cart' element={<Cart />} />
				<Route path='new' element={<SneakersPage />} />
				<Route path='/cart/shipping' element={<ShippingAddress />} />
				<Route path='single/:id' element={<SingleProductPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
