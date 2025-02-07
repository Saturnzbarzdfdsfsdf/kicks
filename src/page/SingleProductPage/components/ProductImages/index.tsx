import React, { useState } from 'react'
import { useAppSelector } from 'src/app/Hook'
import styles from './index.module.scss'
import { selectProducts } from 'src/entities/Product/model/selectors'
// import { IProducts } from 'src/entities/Product/model/types' 

const ProductImages = () => {
	const { products } = useAppSelector(selectProducts)

	// Проверяем, есть ли продукты и есть ли у первого продукта изображения
	const imageUrls = products[0]?.imageUrl || []
	const [mainImage, setMainImage] = useState(imageUrls[0] || '')

	const handleThumbnailClick = (imageUrl: string) => {
		setMainImage(imageUrl)
	}

	return (
		<div className={styles.productImages}>
			{/* Главная фотография */}
			<div
				className={styles.mainImage}
				style={{ backgroundImage: `url('${mainImage}')` }}
			></div>

			{/* Миниатюры */}
			<div className={styles.thumbnailContainer}>
				{imageUrls.slice(1, 4).map(
					(
						imageUrl,
						index // Берем первые 3 миниатюры, начиная со второй
					) => (
						<div
							key={index}
							className={styles.thumbnail}
							style={{ backgroundImage: `url('${imageUrl}')` }}
							onClick={() => handleThumbnailClick(imageUrl)}
						></div>
					)
				)}
			</div>
		</div>
	)
}

export default ProductImages
