export interface IProducts {
	id: number
	title: string
	description: string
	price: number
	rating: number
	sizes: number[]
	imageUrl: string[]
}

export interface IProductState {
	products: IProducts[]
	loading: boolean
	error: string | null
}

export interface IApiResponse {
	meta: {
		total_items: number
		total_pages: number
		current_page: number
		per_page: number
		remaining_count: number
	}
	items: IProducts[]
}