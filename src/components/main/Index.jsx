import { Popular } from "./Index/Popular"
import { Slider } from "./Index/Slider"

export const Index = ({ data }) => {
  return (
    <main className="content index">
      <Slider data={data && data.slider} />
      <Popular data={data && data.goodsList} />
    </main>
  )
}