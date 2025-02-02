import styles from './Reviews.module.scss' 

import rev from '../../shared/assets/images/rev2.png'
import avatar from '../../shared/assets/images/avatar3.png'

const Reviews = () => {
	return (
		<section className={styles.reviews}>
			<div className={styles.reviews__top}>
				<h2 className={styles.reviews__top_title}>Reviews</h2>
				<a href='#' className={styles.reviews__top_link}>
					all
				</a>
			</div>

			<div className={styles.reviews__bottom}>

				<div className={styles.reviews__card}>
					<div className={styles.card_top}>
						<div className={styles.reviews__card_left}>
							<h3 className={styles.reviews__card_title}>Good Quality</h3>
							<p className={styles.reviews__card_desc}>
								I highly recommend shopping from kicks
							</p>

							<div className={styles.rating}>
								<div className={styles.star} data-rating='1'></div>
								<div className={styles.star} data-rating='2'></div>
								<div className={styles.star} data-rating='3'></div>
								<div className={styles.star} data-rating='4'></div>
								<div className={styles.star} data-rating='5'></div>
							</div>
						</div>

						<img
							className={styles.reviews__card_avatar}
							src={avatar}
							alt='avatar'
						/>
					</div>

					<div className={styles.card_bottom}>
						<img src={rev} alt='' />
					</div>
				</div>
        
				<div className={styles.reviews__card}>
					<div className={styles.card_top}>
						<div className={styles.reviews__card_left}>
							<h3 className={styles.reviews__card_title}>Good Quality</h3>
							<p className={styles.reviews__card_desc}>
								I highly recommend shopping from kicks
							</p>

							<div className={styles.rating}>
								<div className={styles.star} data-rating='1'></div>
								<div className={styles.star} data-rating='2'></div>
								<div className={styles.star} data-rating='3'></div>
								<div className={styles.star} data-rating='4'></div>
								<div className={styles.star} data-rating='5'></div>
							</div>
						</div>

						<img
							className={styles.reviews__card_avatar}
							src={avatar}
							alt='avatar'
						/>
					</div>

					<div className={styles.card_bottom}>
						<img src={rev} alt='' />
					</div>
				</div>

				<div className={styles.reviews__card}>
					<div className={styles.card_top}>
						<div className={styles.reviews__card_left}>
							<h3 className={styles.reviews__card_title}>Good Quality</h3>
							<p className={styles.reviews__card_desc}>
								I highly recommend shopping from kicks
							</p>

							<div className={styles.rating}>
								<div className={styles.star} data-rating='1'></div>
								<div className={styles.star} data-rating='2'></div>
								<div className={styles.star} data-rating='3'></div>
								<div className={styles.star} data-rating='4'></div>
								<div className={styles.star} data-rating='5'></div>
							</div>
						</div>

						<img
							className={styles.reviews__card_avatar}
							src={avatar}
							alt='avatar'
						/>
					</div>

					<div className={styles.card_bottom}>
						<img src={rev} alt='' />
					</div>
				</div>

			</div>
		</section>
	)
}

export default Reviews
