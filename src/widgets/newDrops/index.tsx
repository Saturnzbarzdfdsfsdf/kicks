import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../features/cart/model/cartSlice'

import type { FC } from 'react'

import slide1 from '../../shared/assets/images/new1.jpeg'

import 'swiper/swiper-bundle.css'
import styles from './index.module.scss'


interface IPropsNewDrop {
	title: string
}

const Index: FC<IPropsNewDrop> = props => {
	const { title } = props
	const dispatch = useDispatch()

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

	   const handleAddToCart = () => {
				dispatch(addToCart(title)) 
			}


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
							<Link to='single'>
								<img src={slide.src} alt={`Slide ${slide.id}`} />
								<p className={styles.titleCard}>{slide.title}</p>
							</Link>
							<button onClick={handleAddToCart} className={styles.sliderBtn}>
								add to cart
							</button>
						</SwiperSlide>
					</div>
				))}
			</Swiper>
		</section>
	)
}

export default Index
