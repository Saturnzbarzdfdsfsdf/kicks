import type { RootState } from "src/app/store";

export const selectProducts = (state: RootState) => state.products.products


export const selectProductsLoading = (state: RootState) =>
	state.products.loading
