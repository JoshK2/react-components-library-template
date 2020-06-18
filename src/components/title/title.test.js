import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import { Title } from './title'

let rootContainer

beforeEach(() => {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(() => {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Title Component Testing', () => {
  it('Renders Title with Example text', () => {
    act(() => {
      ReactDOM.render(<Title text="Example" />, rootContainer)
    })
    const text = rootContainer.querySelector('div')
    expect(text.textContent).to.equal('Example')
  })
})
