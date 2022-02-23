import { CardTop } from "./CardTop"

export const Card = ({ data }) => {
  console.log(data)
  return (
    <div className="card product-page__card">
      <CardTop data={data ? data : undefined} />
    </div>
  )
}