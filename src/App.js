import React from 'react'
import styles from './App.module.scss'
import { Product } from './components/product'
import { productsList } from './data/products'

const App = () => {
  return (
    <div className={styles.App}>
      {productsList.map((p, index) => {
        return (
          <Product
            {...p}
            onClick={() => alert(`Click on ${p.title}`)}
            className={styles.product}
          />
        )
      })}
    </div>
  )
}

export default App
