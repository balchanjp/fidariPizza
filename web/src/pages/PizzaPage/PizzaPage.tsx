import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PizzaPage = () => {
  return (
    <>
      <Metadata title="Pizza" description="Pizza page" />

      <h1>PizzaPage</h1>
      <p>
        Find me in <code>./web/src/pages/PizzaPage/PizzaPage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Pizza</Link>`
      </p>
    </>
  )
}

export default PizzaPage
