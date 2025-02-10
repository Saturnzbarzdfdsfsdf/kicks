import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router'
import { useAppSelector } from 'src/app/Hook'
import { selectTotalItems } from 'src/features/cart/model/selectors'
import { NavHeader } from 'src/shared/ui/index'
import { HeaderMini } from 'src/widgets'

import logo from '../../assets/images/Logo.png'
import User from '../../assets/icon/User.svg'
import Search from '../../assets/icon/Search.svg'

import useSticky from 'src/shared/hooks/useSticky'
import useHeaderVisibility from 'src/shared/hooks/useHeaderVisibility'

import styles from './index.module.scss'

const Header = () => {
	const totalItems = useAppSelector(selectTotalItems)
	const headerRef = useRef<HTMLDivElement>(null)
	const isSticky = useSticky(250)

	const {
		visible: autoVisible,
		handleMouseEnter,
		handleMouseLeave,
		handleFocus,
		handleBlur,
	} = useHeaderVisibility(1200)

	const [headerHeight, setHeaderHeight] = useState(0)

	// Определяем высоту хедера для placeholder
	useEffect(() => {
		if (headerRef.current) {
			setHeaderHeight(headerRef.current.offsetHeight)
		}
	}, [])

	// Если хедер ещё не стал sticky – он всегда виден;
	// если sticky, то показываем его, когда происходит скролл или наведён курсор.
	const headerVisible = !isSticky || (isSticky && autoVisible)

	return (
		<>
			<header
				ref={headerRef}
				className={`
          ${styles.header} 
          ${isSticky ? styles.sticky : ''} 
          ${headerVisible ? styles.visible : styles.hidden}
        `}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				<div className={styles.container}>

		
					
					<div className={styles.header__top}>

						<NavHeader sticky={isSticky} />
						
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
										<img src={Search} alt='Поиск' />
									</button>
								</form>
							</div>
							<div className={styles.header__user}>
								<a href='#'>
									<img src={User} alt='Пользователь' />
								</a>
							</div>
							<Link to='/cart'>
								<div className={styles.header__cart}>
									<p>{totalItems}</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</header>

			{/* Placeholder для сохранения места при position: fixed */}
			{isSticky && <div style={{ height: headerHeight }} />}

			{/* Триггер-зона – если хедер скрыт, при наведении на эту область он появляется */}
			{isSticky && (
				<div className={styles.headerTrigger} onMouseEnter={handleMouseEnter} />
			)}
		</>
	)
}

export default Header
