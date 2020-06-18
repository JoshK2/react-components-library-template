import React from 'react'
import PropTypes from 'prop-types'
import styles from './price.module.scss'

/**
 * Price component
 */
const Price = ({ price }) => {
  return <div className={styles.price}>{price}</div>
}

Price.propTypes = {
  /**
   * product pricing
   */
  price: PropTypes.string.isRequired,
}

Price.defaultProps = {
  price: '$100',
}

export { Price }
