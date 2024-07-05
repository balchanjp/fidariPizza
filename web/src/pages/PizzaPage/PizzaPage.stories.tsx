import type { Meta, StoryObj } from '@storybook/react'

import PizzaPage from './PizzaPage'

const meta: Meta<typeof PizzaPage> = {
  component: PizzaPage,
}

export default meta

type Story = StoryObj<typeof PizzaPage>

export const Primary: Story = {}
