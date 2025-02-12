import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { Slide } from '../../shared/ui/index'

import type { FC } from 'react'
import type { IProducts } from 'src/entities/Product/model/types'

import 'swiper/swiper-bundle.css'
import styles from './index.module.scss'

interface IPropsNewDrop {
	title: string
	products: IProducts[]
}

const Index: FC<IPropsNewDrop> = ({ title, products }) => {
	return (
		<section className={styles.newDrop}>
			<div className={styles.newDropTop}>
				<h2 className={styles.title2}>{title}</h2>
				<Link className={styles.desc} to='new'>
					new collection
				</Link>
			</div>

			<Swiper
				className={styles.secondSwiper}
				// loop={true}
				speed={800}
				modules={[Autoplay]}
				// autoplay={{ delay: 6000 }}
				spaceBetween={20}
				slidesPerView={4}
				breakpoints={{
					640: {
						width: 340,
						slidesPerView: 1,
					},
					780: {
						width: 560,
						slidesPerView: 2,
					},
					430: {
						width: 380,
						slidesPerView: 2,
					},
				}}
			>
				{products.map(product => (
					<SwiperSlide key={product.id} className={styles.swiperSlide}>
						<Slide product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Index
