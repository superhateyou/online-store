import { CollectionFilter } from "./CollectionFilter"
import { SeasonFilter } from "./SeasonFilter"
import { ColorFilter } from "./ColorFilter"
import { GenderFilter } from "./GenderFilter"

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
        <div className="form__row form__row_direction_column">
          <label className="form__label">Размер</label>
          <div className="form__content-group">
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-1"
                name="Filter[size]"
                type="checkbox"
                defaultValue={50}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-1" className="checkbox-tile__label">
                50
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-2"
                name="Filter[size]"
                type="checkbox"
                defaultValue={56}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-2" className="checkbox-tile__label">
                56
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-3"
                name="Filter[size]"
                type="checkbox"
                defaultValue={62}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-3" className="checkbox-tile__label">
                62
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-4"
                name="Filter[size]"
                type="checkbox"
                defaultValue={68}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-4" className="checkbox-tile__label">
                68
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-5"
                name="Filter[size]"
                type="checkbox"
                defaultValue={74}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-5" className="checkbox-tile__label">
                74
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-6"
                name="Filter[size]"
                type="checkbox"
                defaultValue={80}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-6" className="checkbox-tile__label">
                80
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-7"
                name="Filter[size]"
                type="checkbox"
                defaultValue={86}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-7" className="checkbox-tile__label">
                86
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-8"
                name="Filter[size]"
                type="checkbox"
                defaultValue={92}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-8" className="checkbox-tile__label">
                92
              </label>
            </div>
            <div className="checkbox-tile checkbox-tile_size_big">
              <input
                id="filter-size-9"
                name="Filter[size]"
                type="checkbox"
                defaultValue={98}
                className="checkbox-tile__elem"
              />
              <label htmlFor="filter-size-9" className="checkbox-tile__label">
                98
              </label>
            </div>
          </div>
        </div>
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