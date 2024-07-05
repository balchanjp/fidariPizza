import { render } from '@redwoodjs/testing/web'

import PizzaPage from './PizzaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PizzaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PizzaPage />)
    }).not.toThrow()
  })
})
