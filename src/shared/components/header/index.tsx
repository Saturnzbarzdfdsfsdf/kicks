import logo from '../../assets/images/Logo.png'
import User from '../../assets/icon/User.svg'
import Search from '../../assets/icon/Search.svg'

import styles from './index.module.scss'
import { Link } from 'react-router'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__top}>
					<nav className={styles.header__nav}>
						<ul className={styles.navList}>
							<li className={styles.navItem}>
								<Link to='new'>New Drops 🔥</Link>
							</li>

							<li className={`${styles.navItem} ${styles.dropdown}`}>
								<a href='#' className={styles.dropdownToggle}>
									Man
								</a>
								<ul className={styles.dropdownMenu}>
									<li className={styles.dropdownItem}>
										<a href='#'>Одежда</a>
									</li>
									<li className={styles.dropdownItem}>
										<Link to='shoes'>Обувь</Link>
									</li>
									<li className={styles.dropdownItem}>
										<a href='#'>Аксессуары</a>
									</li>
								</ul>
							</li>

							<li className={`${styles.navItem} ${styles.dropdown}`}>
								<a href='#' className={styles.dropdownToggle}>
									Woman
								</a>
								<ul className={styles.dropdownMenu}>
									<li className={styles.dropdownItem}>
										<a href='#'>Одежда</a>
									</li>
									<li className={styles.dropdownItem}>
										<a href='#'>Обувь</a>
									</li>
									<li className={styles.dropdownItem}>
										<a href='#'>Аксессуары</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>

					<div className={styles.header__logo}>
						<Link to='/'>
							<img src={logo} alt='logo' />
						</Link>
					</div>

					<div className={styles.header__actions}>
						<div className={styles.header__search}>
							<form action='/search' method='get'>
								<input type='text' name='q' placeholder='Поиск...' />
								<button type='submit'>
									<img src={Search} alt='' />
								</button>
							</form>
						</div>

						<div className={styles.header__user}>
							<a href='#'>
								<img src={User} alt='user' />
							</a>
						</div>

						<Link to={'/cart'}>
							<div className={styles.header__cart}>
								<p>0</p>
							</div>
						</Link>
						
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
