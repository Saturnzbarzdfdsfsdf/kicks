import { useRef, useCallback } from 'react'

const useSmoothScroll = () => {
	const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

	const scrollToSection = useCallback((id: string) => {
		const element = sectionRefs.current[id]
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}, [])

	const registerSectionRef = useCallback((id: string) => {
		return (element: HTMLElement | null) => {
			sectionRefs.current[id] = element
		}
	}, [])

	return {
		scrollToSection,
		registerSectionRef,
	}
}

export default useSmoothScroll
