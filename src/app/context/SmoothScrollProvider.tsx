
import { createContext, useContext } from 'react'
import useSmoothScroll from '../../shared/hooks/useScrollLink'

type TSmoothScrollContextType = ReturnType<typeof useSmoothScroll>

const SmoothScrollContext = createContext<TSmoothScrollContextType | null>(null)

export const SmoothScrollProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	
	const contextValue = useSmoothScroll()

	return (
		<SmoothScrollContext.Provider value={contextValue}>
			{children}
		</SmoothScrollContext.Provider>
	)
}

export const useSmoothScrollContext = () => {
	const context = useContext(SmoothScrollContext)
	if (!context) {
		throw new Error(
			'SmoothScrollContext must be used within a SmoothScrollProvider'
		)
	}
	return context
}
