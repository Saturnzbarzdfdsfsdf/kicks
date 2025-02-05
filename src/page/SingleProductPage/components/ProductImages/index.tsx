import styles from './index.module.scss'

const ProductImages = () => {
	return (
		<div className={styles.productImages}>
			{/* Главная фотография */}
			<div
				className={styles.mainImage}
				style={{ backgroundImage: `url('URL_ВАШЕЙ_ГЛАВНОЙ_ФОТОГРАФИИ')` }}
			></div>

			{/* Миниатюры */}
			<div className={styles.thumbnailContainer}>
				<div
					className={styles.thumbnail}
					style={{ backgroundImage: `url('URL_ПЕРВОЙ_МИНИАТЮРЫ')` }}
				></div>
				<div
					className={styles.thumbnail}
					style={{ backgroundImage: `url('URL_ВТОРОЙ_МИНИАТЮРЫ')` }}
				></div>
				<div
					className={styles.thumbnail}
					style={{ backgroundImage: `url('URL_ТРЕТЬЕЙ_МИНИАТЮРЫ')` }}
				></div>
			</div>
		</div>
	)
}

export default ProductImages
