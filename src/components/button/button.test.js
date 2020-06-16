import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import { Button } from './button'

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement('div');
  document.body.appendChild(rootContainer);
})

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
})

describe('Button Component Testing', () => {
  it('Renders Button with Add text', () => {
    act(() => {
      ReactDOM.render(
        <Button text="text" onClick={() => console.log('click')} />,
        rootContainer
      );
    });
    const text = rootContainer.querySelector('button');
    expect(text.textContent).to.equal('Add');
  })
})
