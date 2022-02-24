export const ProductPrice = ({ discount, price }) => {
  if (discount > 0) {
    let newPrice = price * (1 - discount / 100)
    return (
      <div className="card__content-row">
        <div className="card__price card__price_new">{Math.round(newPrice)} р.</div>
        <div className="card__price card__price_old">{price} р.</div>
      </div>
    )
  }
  if (typeof discount === undefined) {
    <div className="card__content-row">
      <div className="card__price card__price_new">{price} р.</div>
    </div>
  }
  else return (<div></div>)
}