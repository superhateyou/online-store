import { Menu } from "./Menu"
import { NavCollapse } from "./NavCollapse"

export const HeaderBottom = () => {
  return (
    <div className="header__bottom">
      <div className="container">
        <nav className="header__nav navigation">
          <Menu />
          <button className="burger-btn header__nav-btn js-nav-btn">
            <span className="burger-btn__switch">Развернуть меню </span>
          </button>
          <NavCollapse />
        </nav>
      </div>
    </div>
  )
}