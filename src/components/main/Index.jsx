import React from "react"
import { Popular } from "./Index/Popular"
import { Slider } from "./Index/Slider"


export const Index = () => {
  return (
    <div className="container">
      <Slider />
      <Popular />
    </div>
  )
}