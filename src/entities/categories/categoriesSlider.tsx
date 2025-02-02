import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/swiper-bundle.css'
import styles from './categories.module.scss'

import slideNike from '../../shared/assets/images/cat3.jpg'
import arrowLink from '../../shared/assets/icon/arrow_right.svg'

const CategoriesSlider: React.FC = () => {
	return (
		<section className={styles.categories}>
			<div className={styles.firstThird}>
				<h2 className={styles.title2}>Categories</h2>

				<div className={styles.swiperNavigation}>
					<div className={`${styles.customButtonPrev} prev`}>{'<'}</div>
					<div className={`${styles.customButtonNext} next`}>{'>'}</div>
				</div>

				<Swiper
					spaceBetween={20}
					slidesPerView={2}
					modules={[Navigation]}
					navigation={{
						prevEl: '.prev',
						nextEl: '.next',
					}}
				>
					{[1, 2, 3, 4].map((slide, index) => (
						<SwiperSlide key={index}>
							<div className={styles.slideContent}>
								<img src={slideNike} alt='Lifestyle' />
								<h3 className={styles.slideContentTitle}>LIFESTYLE</h3>
								<a href='#' className={styles.slideContentLink}>
									<img
										className={styles.slideContentLinkImg}
										src={arrowLink}
										alt='link-categories'
									/>
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default CategoriesSlider
