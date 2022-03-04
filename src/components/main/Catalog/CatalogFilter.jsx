import { CollectionFilter } from "./CollectionFilter"
import { SeasonFilter } from "./SeasonFilter"
import { ColorFilter } from "./ColorFilter"
import { GenderFilter } from "./GenderFilter"
import { SizesFilter } from "./SizesFilter"

export const CatalogFilter = ({ data }) => {
  return (
    <form
      method="post"
      action=""
      data-block={1}
      className="catalog-page__filter catalog__filter form"
    >
      <fieldset className="form__fieldset">
        <legend className="form__title form__title_align_center">Фильтр</legend>
        <SeasonFilter data={data && data} />
        <CollectionFilter data={data && data} />
        <ColorFilter data={data && data} />
        <GenderFilter data={data && data} />
        <SizesFilter data={data && data} />
        <div className="form__row form__row_direction_column">
          <label className="form__label">Наличие</label>
          <div className="checkbox">
            <input
              id="filter-availability-1"
              name="Filter[availability]"
              type="checkbox"
              defaultValue="available"
              className="checkbox__elem"
            />
            <label
              htmlFor="filter-availability-1"
              className="checkbox__label form__label"
            >
              В наличии
            </label>
          </div>
          <div className="checkbox">
            <input
              id="filter-availability-2"
              name="Filter[availability]"
              type="checkbox"
              defaultValue="order"
              className="checkbox__elem"
            />
            <label
              htmlFor="filter-availability-2"
              className="checkbox__label form__label"
            >
              Под заказ
            </label>
          </div>
        </div>
        <div className="form__row form__row_direction_column">
          <label className="form__label">Цена, руб.</label>
          <div className="range-slider">
            <input className="range-slider__elem" type="text" />
            <div className="range-slider__output-row">
              <input
                name="Filter[price-min]"
                data-type="min"
                readOnly=""
                className="input range-slider__output"
                type="text"
              />
              <input
                name="Filter[price-max]"
                data-type="max"
                readOnly=""
                className="input range-slider__output"
                type="text"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Показать товары
        </button>
      </fieldset>
    </form>
  )
}