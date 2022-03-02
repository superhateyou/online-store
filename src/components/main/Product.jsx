import axios from 'axios';
import { useEffect, useState } from 'react'
import { Breadcrumbs } from "./Product/Breadcrumbs"
import { CardTabs } from "./Product/Card/CardTabs"
import { CardTop } from './Product/Card/CardTop'
import { CardRecs } from './Product/Card/CardRecs'
import { CardBuyWith } from "./Product/Card/CardBuyWith"
import { CardPopUp } from "./Product/Card/CardPopUp"
import { useParams } from "react-router"

export const Product = () => {
  document.title = "product"
  const match = useParams()
  const [good, setGood] = useState(undefined)
  useEffect(() => {
    axios.get("/goods.json")
      .then(res => setGood(res.data.find(item => item.id === match.id)))
      .catch(err => console.log(err))
  }, [match.id])

  return (
    <main className="content product-page">
      <div className="container">
        <Breadcrumbs />
        <div className="card product-page__card">
          <CardTop data={good && good} />
          <CardTabs data={good && good} />
        </div>
      </div>
      <CardBuyWith />
      <CardRecs />
      <CardPopUp data={good && good} />
    </main>
  )
}