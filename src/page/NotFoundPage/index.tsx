// NotFound.js
import React from 'react'
import styles from './index.module.scss' 

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<h1 className={styles.title}>404</h1>
			<p className={styles.message}>Страница не найдена</p>
			<a href='/' className={styles.link}>
				Вернуться на главную
			</a>
		</div>
	)
}

export default NotFound
