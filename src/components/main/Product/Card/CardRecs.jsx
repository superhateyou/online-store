import axios from 'axios';
import { useEffect, useState } from 'react'
import { Good } from "../../Index/Good"

export const CardRecs = () => {
  const [good, setGood] = useState(undefined)

  useEffect(() => {
    axios.get('/goods.json')
      .then(res => setGood(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <article className="product-page__section">
      <h2 className="heading product-page__title">
        <span className="heading__text">Рекомендуем</span>
      </h2>
      <ul className="goods product-page__goods">
        {good?.map(el => (<Good data={el} key={el.id} />))}
        <li className="goods__item" />
        <li className="goods__item" />
      </ul>
    </article>
  )
}