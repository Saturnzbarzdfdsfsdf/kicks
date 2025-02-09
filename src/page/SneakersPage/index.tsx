import { useEffect, useState } from 'react'
import { fetchProducts } from 'src/entities/Product/model/productThunk'
import { useAppDispatch, useAppSelector } from 'src/app/Hook'

import {
  selectCurrentPage,
  selectProductsLoading,
  selectTotalPages,
} from 'src/entities/Product/model/selectors'

import { selectFilteredProducts } from '../../features/search/model/filterSelectors'

import { SideBar } from 'src/widgets'
import { ProductCard, Discount, Pagination } from 'src/shared/ui'

import styles from './index.module.scss'

const Index = () => {
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(selectProductsLoading)
  // Пагинация
  const totalPages = useAppSelector(selectTotalPages)
  const currentPage = useAppSelector(selectCurrentPage)

  // Получаем отфильтрованные продукты через селектор
  const filteredProducts = useAppSelector(selectFilteredProducts)

 
  const [localPage, setLocalPage] = useState(1)

  useEffect(() => {
    dispatch(fetchProducts({ page: localPage }))
  }, [dispatch, localPage])

  const handlePageChange = (newPage: number) => {
    setLocalPage(newPage)
  }

  if (isLoading) return <div>Loading...</div>

  if (!Array.isArray(filteredProducts)) {
    console.error('Products is not an array:', filteredProducts)
    return <div>Error: Products data is invalid.</div>
  }

  return (
    <section className={styles.new}>
      <Discount />
      <div className={styles.bottom}>
        <aside className={styles.sideBar}>
          <div className={styles.sideBar__top}>
            <h3 className={styles.sideBar__title}>Life Style Shoes</h3>
            <p className={styles.sideBar__items}>
              {filteredProducts.length} items
            </p>
          </div>
          <SideBar />
        </aside>
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className={styles.pagination}></div>
    </section>
  )
}

export default Index
