import React from "react"
import { Popular } from "./Index/Popular"
import { Slider } from "./Index/Slider"

export const Index = ({ data, goods }) => {
  return (
    <main className="content index">
      <Slider data={data && data.slider} />
      <Popular data={goods && goods.goodsList} />
    </main>
  )
}