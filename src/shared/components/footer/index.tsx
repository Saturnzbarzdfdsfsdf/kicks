import { useSmoothScrollContext } from 'src/app/context/SmoothScrollProvider'
import logoBig from '../../assets/images/logo-big.png'

import logoMedium from '../../assets/images/logo-medium.png'

import styles from './index.module.scss'

const Footer = () => {
const {registerSectionRef} = useSmoothScrollContext()

	return (
		<footer ref={registerSectionRef('About')} className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__outer}>
					<h3 className={styles.footer__outer_title}>
						Join our KicksPlus Club & get 15% off
					</h3>
					<p className={styles.footer__outer_desc}>
						Sign up for free! Join the community.
					</p>

					<fieldset className={styles.fieldset}>
						<input
							className={styles.fieldset__input}
							type='text'
							placeholder='Placeholder'
						/>
						<input className={styles.fieldset__input_btn} type='submit' />
					</fieldset>

					<a href='/' className={styles.footer__outer_logo}>
						<img className={styles.logo} src={logoMedium} alt='logo' />
					</a>

					<div className={styles.footer__inner}>
						<nav className={styles.footer__inner_nav}>
							<ul className={styles.footer__inner_ul}>
								<li>About us</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Sint, nobis. Aliquam aut nesciunt, similique odio expedita.
								</li>
							</ul>

							<ul className={styles.footer__inner_ul}>
								<li>Categories</li>
								<li>
									<a href='#'>Runners</a>
								</li>
								<li>
									<a href='#'>Sneakers</a>
								</li>
								<li>
									<a href='#'>Basketball</a>
								</li>

							</ul>

							<ul className={styles.footer__inner_ul}>
								<li>Company</li>
								<li>
									<a href='#'>About</a>
								</li>
								<li>
									<a href='#'>Contact</a>
								</li>
								<li>
									<a href='#'>Blogs</a>
								</li>
							</ul>

							<ul className={styles.footer__inner_ul}>
								<li>Follow us</li>
								<ul className={styles.social}>
									<li>
										<a href='#'>
											<img
												src='./src/assets/icon/facebook.svg'
												alt='facebook'
											/>
										</a>
										<a href='#'>
											<img
												src='./src/assets/icon/instagram.svg'
												alt='instagram'
											/>
										</a>
										<a href='#'>
											<img src='./src/assets/icon/twitter.svg' alt='twitter' />
										</a>
									</li>
								</ul>
							</ul>
						</nav>

						<div className={styles.footer__inner_logo}>
							<img src={logoBig} alt='logo' />
						</div>
					</div>

					<p className={styles.create}>
						© All rights reserved | Made with ❤️ by Saturn
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
