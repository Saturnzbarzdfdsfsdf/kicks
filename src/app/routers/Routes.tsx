import { Routes, Route } from 'react-router-dom'

import { HomePage, NotFoundPage, SingleProductPage } from 'src/page'
import { Cart } from '../../features/index'
import { SneakersPage } from '../../page/index'

import Layout from '../layout'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='cart' element={<Cart />} />
				<Route path='new' element={<SneakersPage />} />
				<Route path='single/:id' element={<SingleProductPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
