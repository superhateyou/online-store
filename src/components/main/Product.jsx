import { Breadcrumbs } from "./Product/Breadcrumbs"
import { Card } from "./Product/Card/Card"

export const Product = () => {
  return (
    <main className="content product-page">
      <div className="container">
        <Breadcrumbs />
        <Card />
      </div>
    </main>
  )
}