import { Good } from "../../Index/Good"

export const CardBuyWith = ({ data }) => {
  return (
    <article className="product-page__section">
      <h2 className="heading product-page__title">
        <span className="heading__text">С этим товаром покупают</span>
      </h2>
      <ul className="goods product-page__goods">
        {data?.map(el => (<Good data={el} key={el.id} />))}
        <li className="goods__item" />
        <li className="goods__item" />
      </ul>
    </article>
  )
}