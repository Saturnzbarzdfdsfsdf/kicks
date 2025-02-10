import { useState, useEffect, useRef } from 'react'

/**
 * Хук useHeaderVisibility следит за событиями скролла
 * и возвращает флаг, показывающий, должен ли хедер быть видимым.
 * Видимость поддерживается, если происходит скролл или элемент в фокусе/под курсором.
 *
 * @param hideDelay - время (в мс) после прекращения скролла, по истечении которого скроллинг считается завершённым (по умолчанию 300 мс)
 */
const useHeaderVisibility = (hideDelay: number = 1200) => {
	const [isScrolling, setIsScrolling] = useState<boolean>(false)
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const scrollTimeoutRef = useRef<number | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (scrollTimeoutRef.current !== null) {
				clearTimeout(scrollTimeoutRef.current)
			}
			setIsScrolling(true)
			scrollTimeoutRef.current = window.setTimeout(() => {
				setIsScrolling(false)
			}, hideDelay)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			if (scrollTimeoutRef.current !== null) {
				clearTimeout(scrollTimeoutRef.current)
			}
			window.removeEventListener('scroll', handleScroll)
		}
	}, [hideDelay])

	// Хедер должен быть видим, если либо происходит скролл, либо наводят/фокусируют на нём.
	const visible = isHovered || isScrolling

	const handleMouseEnter = () => setIsHovered(true)
	const handleMouseLeave = () => setIsHovered(false)
	const handleFocus = () => setIsHovered(true)
	const handleBlur = () => setIsHovered(false)

	return {
		visible,
		handleMouseEnter,
		handleMouseLeave,
		handleFocus,
		handleBlur,
	}
}

export default useHeaderVisibility
