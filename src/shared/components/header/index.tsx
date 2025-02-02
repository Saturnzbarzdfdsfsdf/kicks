import logo from '../../assets/images/Logo.png'

import styles from './index.module.scss'


const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__top}>
					<nav className={styles.header__nav}>
						<ul className={styles.navList}>
							<li className={styles.navItem}>
								<a href='#'>New Drops 🔥</a>
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
										<a href='#'>Обувь</a>
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
						<a href='/'>
							<img src={logo} alt='logo' />
						</a>
					</div>

					<div className={styles.header__actions}>
						<div className={styles.header__search}>
							<form action='/search' method='get'>
								<input type='text' name='q' placeholder='Поиск...' />
								<button type='submit'>
									<img src='./src/assets/icon/Search.svg' alt='' />
								</button>
							</form>
						</div>

						<div className={styles.header__user}>
							<a href='#'>
								<img src='./src/assets/icon/User.svg' alt='user' />
							</a>
						</div>

						<div className={styles.header__cart}>
							<a href='#'>
								<p>0</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
