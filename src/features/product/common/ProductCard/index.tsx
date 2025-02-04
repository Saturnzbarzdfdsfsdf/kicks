import React from 'react'

import slide1 from '../../../../shared/assets/images/new1.jpeg'

import styles from './index.module.scss'

const index = () => {
	const slides = [
		{ id: 1, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 2, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 3, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 4, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 5, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 6, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
	]

	return (
		<>
			{slides.map(slide => (
				<div className={styles.wrapper} key={slide.id}>
					<div className={styles.swiperWrapper}>
						<div className={styles.swiperSlide}>
							<a href='#'>
								<img src={slide.src} alt={`Slide ${slide.id}`} />
								<p className={styles.titleCard}>{slide.title}</p>
							</a>
							<a className={styles.sliderBtn} href='#'>
								buy
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default index
