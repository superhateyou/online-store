import { Good } from "./Index/Good";
import { Breadcrumbs } from "./Product/Breadcrumbs";

export const Catalog = () => {
  return (
    <main className="content catalog-page">
      <div className="container">
        <Breadcrumbs />
        <h1>Головные уборы</h1>
      </div>
    </main>
  )
}