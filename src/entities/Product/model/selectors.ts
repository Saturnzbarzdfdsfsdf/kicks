import type { RootState } from "src/app/store";

export const selectProducts = (state: RootState) => state.products.products
export const selectProductsLoading = (state: RootState) =>
	state.products.loading

// pagination
export const selectTotalPages = (state: RootState) => state.products.totalPages
export const selectCurrentPage = (state: RootState) => state.products.currentPage



