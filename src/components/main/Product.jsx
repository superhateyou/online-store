import { Breadcrumbs } from "./Product/Breadcrumbs"
import { CardTabs } from "./Product/Card/CardTabs"
import { CardTop } from './Product/Card/CardTop'
import { CardRecs } from './Product/Card/CardRecs'
import { CardBuyWith } from "./Product/Card/CardBuyWith"
import { CardPopUp } from "./Product/Card/CardPopUp"
import { useLocation } from "react-router"

export const Product = ({ data }) => {
  const location = useLocation()
  console.log(location.pathname.split("/")[2])
  return (
    <main className="content product-page">
      <div className="container">
        <Breadcrumbs />
        <div className="card product-page__card">
          <CardTop data={data && data.find(item => item.id === location.pathname.split("/")[2])} />
          <CardTabs data={data && data.find(item => item.id === location.pathname.split("/")[2])} />
        </div>
      </div>
      {/* <CardBuyWith data={data && data} />
      <CardRecs data={data && data} />
      <CardPopUp data={data && data.find(item => item.id === "faeba6cxzecce")} /> */}
    </main>
  )
}