import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './title.module.scss'

/**
 * A simple title component
 */
export const Title = ({ text, className, ...rest }) => {
  return (
    <div className={classNames(styles.title, className)} {...rest}>
      {text}
    </div>
  )
}

Title.propTypes = {
  /**
   * title text value
   * */
  text: PropTypes.string.isRequired,
  /**
   * optional class
   * */
  className: PropTypes.string,
}

Title.defaultProps = {
  text: 'Title',
}
