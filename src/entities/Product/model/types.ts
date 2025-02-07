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
