// cartSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Product {
	id: number
	name: string
	price: number
}

interface CartItem extends Product {
	quantity: number
}

interface CartState {
	items: CartItem[]
	totalItems: number
	totalPrice: number
}

const initialState: CartState = {
	items: [],
	totalItems: 0,
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<Product>) {
			const product = action.payload
			const existingItem = state.items.find(item => item.id === product.id)

			if (existingItem) {
				existingItem.quantity += 1 // Увеличиваем количество, если товар уже в корзине
			} else {
				state.items.push({ ...product, quantity: 1 }) // Добавляем новый товар в корзину
			}

			state.totalItems += 1 // Увеличиваем общее количество товаров
			state.totalPrice += product.price // Увеличиваем общую стоимость
		},
		removeFromCart(state, action: PayloadAction<number>) {
			const productId = action.payload
			const existingItem = state.items.find(item => item.id === productId)

			if (existingItem) {
				state.totalItems -= existingItem.quantity // Уменьшаем общее количество товаров
				state.totalPrice -= existingItem.price * existingItem.quantity // Уменьшаем общую стоимость
				state.items = state.items.filter(item => item.id !== productId) // Удаляем товар из корзины
			}
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
