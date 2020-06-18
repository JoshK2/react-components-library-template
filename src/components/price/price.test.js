import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import { Price } from './price'

let rootContainer

beforeEach(() => {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(() => {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Price Component Testing', () => {
  it('Renders Price', () => {
    act(() => {
      ReactDOM.render(<Price price="$100" />, rootContainer)
    })
    const text = rootContainer.querySelector('div')
    expect(text.textContent).to.equal('$100')
  })
})
