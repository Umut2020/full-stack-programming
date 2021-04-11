import React from 'react'
import { render, screen } from '@testing-library/react'
import deneme from './deneme'

test('render deneme element', () => {
  render(<deneme/>)
  const h1Element = screen.getByText('Hello World')
  expect(h1Element).toBeInTheDocument()
})

test('to Have text deneme element', () => {
  render(<deneme/>)
  const parafElement = screen.getByTestId('myparagraf')
  expect(parafElement).toHaveTextContent('Deneme')
})

test('Should Card Title Children', () => {
  render(<deneme/>)

  const parafElement = screen.getByTestId('myparagraf')

  expect(parafElement).toBeInTheDocument()
  expect(parafElement).toHaveClass('baslik')
})
