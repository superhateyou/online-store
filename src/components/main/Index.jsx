import React from "react"
import { Popular } from "./Index/Popular"
import { Slider } from "./Index/Slider"

export const Index = () => {
  return (
    <main className="content index">
      <Slider />
      <Popular />
    </main>
  )
}