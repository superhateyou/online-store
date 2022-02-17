import { CollapseMenu } from './CollapseMenu'
import { CollapseButton } from './CollapseButton'

export const HeaderBottom = ({ data }) => {
  return (
    <div className="header__bottom">
      <div className="container">
        <nav className="header__nav navigation">
          <ul className="header__menu menu menu_width_full">

          </ul>
          <CollapseButton />
          <CollapseMenu data={data && data.collapseMenu} />
        </nav>
      </div>
    </div>
  )
}