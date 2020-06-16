import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.module.scss'

export const Button = ({ text, onClick, className, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className)}
      {...rest}
    >
      {text || children}
    </button>
  )
}

Button.propTypes = {
  /**
   * button text value
   * */
  text: PropTypes.string.isRequired,
  /**
   * on click function
   * */
  onClick: PropTypes.func.isRequired,
  /**
   * optional class
   * */
  className: PropTypes.string,
}

Button.defaultProps = {
  text: 'Click',
}
