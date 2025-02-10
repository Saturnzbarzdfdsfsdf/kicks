import AppRouter from './routers/Routes'
import { SmoothScrollProvider } from './context/SmoothScrollProvider'

const App = () => {
	return (
		<>
			<SmoothScrollProvider>
				<AppRouter />
			</SmoothScrollProvider>
		</>
	)
}

export default App
