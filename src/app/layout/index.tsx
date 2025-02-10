import { Outlet } from 'react-router'

import { Header, Footer } from '../../shared/components/index'

import styles from './index.module.scss'
import ScrollToTop from 'src/shared/ui/ScrollTop'
import { HeaderMini } from 'src/widgets'
import useMediaQuery from 'src/shared/hooks/useMediaQuery'

const index = () => {
	
	const isMobile = useMediaQuery('(max-width: 768px)')

	return (
		<div className={styles.container}>
			{isMobile ? <HeaderMini /> : <Header />}
			<ScrollToTop />

			<Outlet />

			<Footer />
		</div>
	)
}

export default index
