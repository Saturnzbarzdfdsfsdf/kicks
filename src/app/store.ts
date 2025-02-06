import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/model/cartSlice'
import productsReducer from '../entities/Product/model/productSlice'


const store = configureStore({
	reducer: { 
			cart: cartReducer,
			products: productsReducer, 
	
	},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store