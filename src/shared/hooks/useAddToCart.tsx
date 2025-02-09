import { useDispatch } from 'react-redux'
import { addToCart } from 'src/features/cart/model/cartSlice'

import type { IProducts } from 'src/features/cart/model/cartSlice'

const useAddToCart = () => {
	const dispatch = useDispatch()

	const handleAddToCart = (product: IProducts) => {
		dispatch(addToCart({ ...product, quantity: 1 }))
	}

	return { handleAddToCart }
}

export default useAddToCart
