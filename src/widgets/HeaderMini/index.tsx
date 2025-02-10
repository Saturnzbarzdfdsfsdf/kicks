import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

interface MobileHeaderProps {
	scrollToSection: (section: string) => void 
}

const NAV_ITEM = ['Do it', 'Categories', 'Reviews', 'About']

const MobileHeader: React.FC<MobileHeaderProps> = ({ scrollToSection }) => {
	const [isOpen, setIsOpen] = useState(false) // Состояние для открытия/закрытия меню


	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	

	return (
		<div className={styles.mobileHeader}>
			<button className={styles.menuButton} onClick={toggleMenu}>
				☰ {/* Иконка "гамбургер" */}
			</button>

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
