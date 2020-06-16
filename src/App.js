import React from 'react'
import styles from './App.module.scss'

import { Button } from './components/button'

const App = () => {
  return (
    <div className={styles.App}>
      <Button text="Click" onClick={() => alert('click')} />
    </div>
  )
}

export default App
