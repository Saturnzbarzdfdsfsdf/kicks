import{ useState } from 'react'
import { Link } from 'react-router-dom'

import { useSmoothScrollContext } from 'src/app/context/SmoothScrollProvider'

import logo from '../../shared/assets/images/Logo.png'

import styles from './index.module.scss'

const NAV_ITEM = ['Do it', 'Categories', 'Reviews', 'About']

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false) 

	const { scrollToSection } = useSmoothScrollContext()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.mobileHeader}>
			<div className={styles.mobileHeader__top}>
				<button
					className={styles.mobileHeader__top_burger}
					onClick={toggleMenu}
				>
					☰
				</button>
				<div className={styles.mobileHeader__top_search}>Search</div>
				<Link to='/' className={styles.menuLink}>
					<img className={styles.logo} src={logo} alt='logo' />
				</Link>
			</div>

			{isOpen && (
				<div className={styles.menu}>
					<Link to='/new' className={styles.menuLink}>
						New Drops 🔥
					</Link>

					{NAV_ITEM.map((item, index) => (
						<button
							key={index}
							className={styles.menuButton}
							onClick={() => {
								scrollToSection(item)
								setIsOpen(false) // Закрываем меню после выбора пункта
							}}
						>
							{item}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default MobileHeader
