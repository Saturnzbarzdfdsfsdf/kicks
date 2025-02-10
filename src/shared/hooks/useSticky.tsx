import { useEffect, useState } from "react"

const useSticky = (offset = 250) => {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsSticky(window.scrollY > offset)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [offset])

	return isSticky
}

export default useSticky