import { Outlet } from 'react-router'

import { Header, Footer } from '../../shared/components/index'

import styles from './index.module.scss'

const index = () => {
	return (
		<>
			<div className={styles.container}>
				<Header />

				<Outlet />

				<Footer />
			</div>
		</>
	)
}

export default index
