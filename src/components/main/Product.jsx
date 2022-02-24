import { Breadcrumbs } from "./Product/Breadcrumbs"
import { CardTabs } from "./Product/Card/CardTabs"
import { CardTop } from './Product/Card/CardTop'
import { CardRecs } from './Product/Card/CardRecs'
import { CardBuyWith } from "./Product/Card/CardBuyWith"

export const Product = ({ data }) => {
  return (
    <main className="content product-page">
      <div className="container">
        <Breadcrumbs />
        <div className="card product-page__card">
          <CardTop data={data && data.find(item => item.id === "faeba6cxzecce")} />
          <CardTabs data={data && data.find(item => item.id === "faeba6cxzecce")} />
        </div>
      </div>
      <CardBuyWith data={data && data} />
      <CardRecs data={data && data} />
    </main>
  )
}