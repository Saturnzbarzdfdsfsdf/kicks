import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import SwiperCore from 'swiper'

import slide1 from '../../shared/assets/images/generated_image.jpg'
import slide2 from '../../shared/assets/images/nikeSlider2.png'
import slide3 from '../../shared/assets/images/nikeSlider3.jpg'

import styles from './index.module.scss'
import { Link } from 'react-router'

const Index: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const swiperRef = useRef<SwiperCore>(null)

	const slides = [
		{
			id: 1,
			src: slide1,
			title: 'NIKE AIR MAX',
			description: 'This is a new mountain collection just for you.',
		},
		{
			id: 2,
			src: slide2,
			title: 'NIKE AIR MAX',
			description: 'This is a new mountain collection just for you.',
		},
		{
			id: 3,
			src: slide3,
			title: 'NIKE AIR MAX',
			description: 'This is a new mountain collection just for you.',
		},
	]

	const changeSlide = (index: number) => {
		setCurrentSlide(index)
		swiperRef.current?.slideTo(index)
	}

	return (
		<section className={styles.doIt}>
			<h1 className={styles.title}>
				Do it <span>right</span>
			</h1>

			<div className={styles.firstSwiper}>
				<Swiper
					effect='fade'
					fadeEffect={{ crossFade: true }}
					speed={800}
					modules={[EffectFade]}
					initialSlide={currentSlide}
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
				>
					{slides.map(slide => (
						<SwiperSlide key={slide.id}>
							<img
								className={styles.mainSlide}
								src={slide.src}
								alt={`Slide ${slide.id}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={styles.sliderContent}>
					<h2>{slides[currentSlide].title}</h2>
					<p>
						{slides[currentSlide].description}
						<br />
						Don't wait, act
					</p>
					<Link to='cart'>buy</Link>
				</div>

				<div className={styles.miniSlide}>
					{slides.map((slide, index) => (
						<img
							key={slide.id}
							className={styles.miniSlideImg}
							src={slide.src}
							alt={`Thumbnail ${slide.id}`}
							onClick={() => changeSlide(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Index

