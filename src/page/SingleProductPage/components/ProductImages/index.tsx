import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { type IProducts } from '../../../../entities/Product/model/types'

interface ProductImagesProps {
	product: IProducts
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
	const [mainImage, setMainImage] = useState<string>('') 
	const imageUrls = product?.imageUrl || []

	useEffect(() => {
	
		if (imageUrls.length > 0) {
			setMainImage(imageUrls[0])
		} else {
			setMainImage('') 
		}
	}, [imageUrls]) 

	const handleThumbnailClick = (imageUrl: string) => {
		setMainImage(imageUrl)
	}

	return (
		<div className={styles.productImages}>
			<div
				className={styles.mainImage}
				style={{ backgroundImage: `url('${mainImage}')` }}
			></div>
			<div className={styles.thumbnailContainer}>
				{imageUrls.slice(1, 4).map((imageUrl, index) => (
					<div
						key={index}
						className={styles.thumbnail}
						style={{ backgroundImage: `url('${imageUrl}')` }}
						onClick={() => handleThumbnailClick(imageUrl)}
					></div>
				))}
			</div>
		</div>
	)
}

export default ProductImages
