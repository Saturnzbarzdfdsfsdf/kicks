import type { RootState } from '../../../app/store'

export const selectCartItems = (state: RootState) => state.cart.items

export const selectTotalItems = (state: RootState) => state.cart.totalItems
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice