import { Link } from 'react-router-dom'
import { useSmoothScrollContext } from 'src/app/context/SmoothScrollProvider'
import styles from './index.module.scss'

interface NavHeaderProps {
	sticky?: boolean
}

const NAV_ITEM = ['Do it', 'Categories', 'Reviews', 'About']

const NavHeader = ({ sticky }: NavHeaderProps) => {
	const { scrollToSection } = useSmoothScrollContext()

	return (
		<nav className={`${styles.nav} ${sticky ? styles.sticky : ''}`}>
			<ul className={styles.nav__list}>
				<li
					className={`${styles.nav__list_link} ${sticky ? styles.sticky : ''}`}
				>
					<Link to='new'>New Drops 🔥</Link>
				</li>

				{NAV_ITEM.map((item, index) => (
					<button
						onClick={() => scrollToSection(item)}
						className={`${styles.nav__list_button} ${
							sticky ? styles.sticky : ''
						}`}
						key={index}
					>
						{item}
					</button>
				))}
			</ul>
		</nav>
	)
}

export default NavHeader
