import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../button'
import { Title } from '../title'
import { Price } from '../price'
import styles from './product.module.scss'

/**
 * Product component that depend on Button and Title components
 */
const Product = ({ title, description, price, image, onClick, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.rowContainer}>
        <Title text={title} className={styles.title} />
        <Price price={price} />
      </div>
      <div className={styles.description}>{description}</div>
      {onClick && (
        <Button
          text="Add to Cart"
          onClick={onClick}
          className={styles.button}
        />
      )}
    </div>
  )
}

Product.propTypes = {
  /**
   * product title
   */
  title: PropTypes.string.isRequired,
  /**
   * product description
   */
  description: PropTypes.string.isRequired,
  /**
   * product pricing
   */
  price: PropTypes.string.isRequired,
  /**
   * product image url
   */
  image: PropTypes.string.isRequired,
  /**
   * On click event function that will show a button under the image
   */
  onClick: PropTypes.func,
  /**
   * optional class
   * */
  className: PropTypes.string,
}

Product.defaultProps = {
  title: 'product title',
  description: 'product description',
  price: '$100',
  image:
    'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-9944e829-002c-4a6b-93ed-cc8801c7eb0c/air-vapormax-360-mens-shoe-b09bdB.jpg',
}

export { Product }
