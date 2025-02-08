import React from 'react'
interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

import styles from './index.module.scss'

const Pagination: React.FC<PaginationProps> = React.memo(
	({ currentPage, totalPages, onPageChange }) => {
		const goToPage = (page: number) => {
			if (page >= 1 && page <= totalPages) {
				onPageChange(page)
			}
		}

		return (
			<div className={styles.pagination}>
				<button
					onClick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}
					className={styles.pagination__button}
				>
					prev
				</button>
				<span>
					{currentPage} / {totalPages}
				</span>
				<button
					onClick={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					className={styles.pagination__button}
				>
					Next
				</button>
			</div>
		)
	}
)

export default Pagination
