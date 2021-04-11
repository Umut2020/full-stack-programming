import React from 'react'
import { render, screen } from '@testing-library/react'
import ChildrenList from './ChildrenListView'

test('render ChildrenListView element', () => {
  render(<ChildrenList/>)
  const cardElement = screen.getByTestId('my-card-title')
  expect(cardElement).toBeInTheDocument()
})

test('to Have text ChildrenListView element', () => {
  render(<ChildrenList/>)
  const cardElement = screen.getByTestId('my-card-title')
  expect(cardElement).toHaveTextContent('Children')
})

test('Should Card Title Children', () => {
  render(<ChildrenList/>)

  const cardElement = screen.getByTestId('my-card-title')

  expect(cardElement).toBeInTheDocument()
  expect(cardElement).toHaveClass('text-muted')
})
