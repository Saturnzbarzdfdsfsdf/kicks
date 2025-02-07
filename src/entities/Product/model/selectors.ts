import type { RootState } from "src/app/store";

export const selectProducts = (state: RootState) => state.products

// export const selectProductsLoading = (state: RootState) => state.loading
export const selectProductsLoading = (state: RootState) =>
	state.products.loading
