import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/model/cartSlice'
import productsReducer from '../entities/Product/model/productSlice'
import filterReducer from '../features/search/model/filterSlice'


const store = configureStore({
	reducer: { 
			cart: cartReducer,
			products: productsReducer, 
			filter: filterReducer
	},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store