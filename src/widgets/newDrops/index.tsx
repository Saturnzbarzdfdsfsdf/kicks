import type { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/swiper-bundle.css'
import styles from './index.module.scss'

import slide1 from '../../shared/assets/images/new1.jpeg'

interface IPropsNewDrop {
	title: string
}

const Index: FC<IPropsNewDrop> = props => {
	const { title } = props

	const slides = [
		{ id: 1, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 2, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 3, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 4, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 5, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 6, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 7, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
		{ id: 8, src: slide1, title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES' },
	]

	return (
		<section className={styles.newDrop}>
			<div className={styles.newDropTop}>
				<h2 className={styles.title2}>{title}</h2>
				<a className={styles.desc} href='#'>new collection</a>
			</div>

			<Swiper
				className={styles.secondSwiper}
				loop={true}
				speed={800}
				modules={[Autoplay]}
				// autoplay={{ delay: 6000 }}
				spaceBetween={20}
				slidesPerView={4}
			>
				{slides.map(slide => (
					<div className={styles.swiperWrapper}>
						<SwiperSlide key={slide.id} className={styles.swiperSlide}>
							<a  href='#'>
								<img src={slide.src} alt={`Slide ${slide.id}`} />
								<p className={styles.titleCard}>{slide.title}</p>
							</a>
							<a className={styles.sliderBtn} href='#'>
								buy
							</a>
						</SwiperSlide>
					</div>
				))}
			</Swiper>
		</section>
	)
}

export default Index
