import { Search } from "./Search"
import { TopMenu } from "./TopMenu"

export const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container header__container header__container_top">
      <div className="header__col header__col_top-left">
            <span className="header__icon icon-mail" />
            <a href="!#" className="link">
                Подписаться
            </a>
        </div>
        <div className="header__col header__col_top-right">
            <TopMenu/>
            <Search />
        </div>
      </div>
    </div>
  )
}