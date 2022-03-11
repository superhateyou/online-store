import { useEffect, useState } from "react"

export const Basket = () => {
  const [total, setTotal] = useState("")
  const [totalPrice, setTotalPrice] = useState("")

  useEffect(() => {
    setTotal(localStorage.getItem("basket"))
    setTotalPrice(JSON.parse(localStorage
      .getItem("basket"))
      .map(el => el.price)
      .reduce((prev, curr) => prev + curr, 0))
  }, [total, totalPrice])

  return (
    <div className="header__col header__col_basket"><span className="header__icon icon-bag"></span>
      <div className="header__basket">
        <div className="text">В вашей корзине}</div>
        <a href="!#" className="link">{JSON.parse(localStorage.getItem("basket")).length} товара на {totalPrice}.</a>
      </div>
    </div>
  )
}