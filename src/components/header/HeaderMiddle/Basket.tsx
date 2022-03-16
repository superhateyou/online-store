import React from "react"
import { useEffect, useState } from "react"

type Good = {
  price: number;
}
export const Basket = () => {
  const [total, setTotal] = useState("")
  const [totalPrice, setTotalPrice] = useState("")

  useEffect(() => {
    const basket = localStorage.getItem("basket")
    if (basket) {
      setTotal(JSON.parse(basket))
      setTotalPrice(JSON.parse(basket)
        .map((el: Good) => el.price)
        .reduce((prev: number, curr: number) => prev + curr, 0))
    }

  }, [])

  return (
    <div className="header__col header__col_basket"><span className="header__icon icon-bag"></span>
      <div className="header__basket">
        <div className="text">В вашей корзине</div>
        <a href="!#" className="link">{total?.length} товара на {totalPrice} р.</a>
      </div>
    </div>
  )
}