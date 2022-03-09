import { CatalogSort } from "./CatalogSort"
import { CatalogWrapper } from "./CatalogWrapper"

export const CatalogMain = ({ data }) => {
  return (
    <div className="catalog__main">
      <CatalogSort />
      <CatalogWrapper data={data && data} />
      <div className="catalog__more">
        <a href="!#" className="catalog__more-btn link">
          <span className="icon-load" />
          Загрузить еще 12 товаров
        </a>
        <a href="!#" className="link text">
          Показать все
        </a>
      </div>
    </div>
  )
}