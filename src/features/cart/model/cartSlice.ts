import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IProducts {
	id: number
	title: string
	price: number
	rating: number
	sizes: number[]
	imageUrl: string[]
}

interface ICartItem extends IProducts {
	quantity: number
}

interface CartState {
	items: ICartItem[]
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
		addToCart(state, action: PayloadAction<ICartItem>) {
			const newItem = action.payload
			const existingItem = state.items.find(item => item.id === newItem.id)

			if (existingItem) {
				existingItem.quantity = (existingItem.quantity || 0) + newItem.quantity
				//Обновляем totalItems и totalPrice
				state.totalItems += newItem.quantity
				state.totalPrice += newItem.price * newItem.quantity // 
			} else {
				state.items.push({ ...newItem })
				//Обновляем totalItems и totalPrice
				state.totalItems += newItem.quantity
				state.totalPrice += newItem.price * newItem.quantity //
			}
		},
		removeFromCart(state, action: PayloadAction<number>) {
			const itemId = action.payload
			const removedItem = state.items.find(item => item.id === itemId)
			if (removedItem) {
				//Обновляем totalItems и totalPrice
				state.totalItems -= removedItem.quantity
				state.totalPrice -= removedItem.price * removedItem.quantity // 
			}
			state.items = state.items.filter(item => item.id !== itemId)
		},
		updateQuantity(
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) {
			const { id, quantity } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) {
				//Обновляем totalItems и totalPrice
				state.totalItems += quantity - item.quantity
				state.totalPrice += (quantity - item.quantity) * item.price
				item.quantity = quantity
				if (item.quantity <= 0) {
					state.items = state.items.filter(item => item.id !== id)
					state.totalPrice -= item.price * item.quantity
				}
			}
		},
		clearCart(state) {
			state.items = []
			state.totalItems = 0 // Обнуляем totalItems
			state.totalPrice = 0 // Обнуляем totalPrice
		},
	},
})

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
	cartSlice.actions

export default cartSlice.reducer
