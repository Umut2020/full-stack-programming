import React from 'react'
import Child from './Child'
import { render, screen } from '@testing-library/react'

test('render Child element', () => {
  render(<Child/>)
  const cardElement = screen.getByTestId('myfooter')
  expect(cardElement).toBeInTheDocument()
})

test('to Have text Child element', () => {
  render(<Child/>)
  const cardElement = screen.getByTestId('myfooter')
  expect(cardElement).toHaveTextContent('Birthday')
})

test('have to a class', () => {
  render(<Child/>)

  const cardElement = screen.getByTestId('myfooter')

  expect(cardElement).toBeInTheDocument()
  expect(cardElement).toHaveClass('text-muted')
})
