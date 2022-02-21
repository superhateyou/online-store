import { CollapseMenu } from './CollapseMenu'
import { CollapseButton } from './CollapseButton'
import { MenuItem } from './MenuItem'
import { CatalogList } from './CatalogList'
import { SaleList } from './SaleList'

export const HeaderBottom = ({ data }) => {
  return (
    <div className="header__bottom">
      <div className="container">
        <nav className="header__nav navigation">
          <ul className="header__menu menu menu_width_full">
            <CatalogList data={data && data.catalog} />
            {data && data.botNav.map(el => <MenuItem key={el.id} data={el} />)}
            <SaleList data={data && data.sale} />
          </ul>
          <CollapseButton />
          <CollapseMenu data={data && data.collapseMenu} />
        </nav>
      </div>
    </div>
  )
}