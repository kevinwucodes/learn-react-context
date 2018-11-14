import 'jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import { App } from '../index'

test('the component contains the dark theme', () => {
  const component = <App />

  const { debug, getByText } = render(component)

  debug()

  const p = getByText(/dark/i)

  expect(p).toBeInTheDocument()
})
