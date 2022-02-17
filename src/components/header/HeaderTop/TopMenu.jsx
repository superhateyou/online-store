import { TopMenuItem } from "./TopMenuItem"

export const TopMenu = ({ data }) => {
  return (
    <ul className="header__top-menu menu">
      {data?.map(el => <TopMenuItem key={el.id} data={el} />)}
    </ul>
  )
}