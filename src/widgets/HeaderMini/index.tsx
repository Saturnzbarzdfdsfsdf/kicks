import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useSmoothScrollContext } from 'src/app/context/SmoothScrollProvider'
import useSticky from 'src/shared/hooks/useSticky'

import logo from '../../shared/assets/images/Logo.png'

import styles from './index.module.scss'
import useHeaderVisibility from 'src/shared/hooks/useHeaderVisibility'
import { useAppSelector } from 'src/app/Hook'
import { selectTotalItems } from 'src/features/cart/model/selectors'

const NAV_ITEM = ['Do it', 'Categories', 'Reviews', 'About']

const MobileHeader = () => {
	const totalItems = useAppSelector(selectTotalItems)

	const [isOpen, setIsOpen] = useState(false)
	const [headerHeight, setHeaderHeight] = useState(0)
	const { scrollToSection } = useSmoothScrollContext()
	const headerRef = useRef<HTMLDivElement>(null)
	const isSticky = useSticky(250)

	// Определяем высоту хедера для placeholder
	useEffect(() => {
		if (headerRef.current) {
			setHeaderHeight(headerRef.current.offsetHeight)
		}
	}, [])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const {
		visible: autoVisible,
		handleMouseEnter,
		handleMouseLeave,
		handleFocus,
		handleBlur,
	} = useHeaderVisibility(1200)

	// Если хедер ещё не стал sticky – он всегда виден;
	// если sticky, то показываем его, когда происходит скролл или наведён курсор.
	const headerVisible = !isSticky || (isSticky && autoVisible)

	return (
		<>
			<div
				className={`
			${styles.mobileHeader}
			${isSticky ? styles.sticky : ''} 
			${headerVisible ? styles.visible : styles.hidden}
			`}
				ref={headerRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				<div className={styles.mobileHeader__top}>
					<button
						className={styles.mobileHeader__top_burger}
						onClick={toggleMenu}
					>
						☰
					</button>

					<Link to='/' className={styles.menuLink}>
						<img className={styles.logo} src={logo} alt='logo' />
					</Link>

					<div className={styles.mobileHeader__top_search}>Search</div>

					<Link to='/cart'>
						<div className={styles.header__cart}>
							<p>{totalItems}</p>
						</div>
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

			{/* Placeholder для сохранения места при position: fixed */}
			{isSticky && <div style={{ height: headerHeight }} />}

			{/* Триггер-зона – если хедер скрыт, при наведении на эту область он появляется */}
			{isSticky && (
				<div className={styles.headerTrigger} onMouseEnter={handleMouseEnter} />
			)}
		</>
	)
}

export default MobileHeader
