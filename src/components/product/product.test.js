import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import { Product } from './product'

let rootContainer

beforeEach(() => {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(() => {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Product Component Testing', () => {
  it('Renders Product with Button component', () => {
    act(() => {
      ReactDOM.render(
        <Product onClick={() => alert('on click!')} />,
        rootContainer
      )
    })
    const text = rootContainer.querySelector('button')
    expect(text.textContent).to.equal('Add to Cart')
  })
})
