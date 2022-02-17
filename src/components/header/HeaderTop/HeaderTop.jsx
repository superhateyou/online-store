import { Search } from "./Search"
import { TopMenu } from "./TopMenu"
import { Subscribe } from "./Subscribe"

export const HeaderTop = ({ data }) => {
  return (
    <div className="header__top">
      <div className="container header__container header__container_top">
        <Subscribe />
        <div className="header__col header__col_top-right">
          <TopMenu data={data} />
          <Search />
        </div>
      </div>
    </div>
  )
}