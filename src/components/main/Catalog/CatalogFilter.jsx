import { CollectionFilter } from "./CollectionFilter"
import { SeasonFilter } from "./SeasonFilter"
import { ColorFilter } from "./ColorFilter"
import { GenderFilter } from "./GenderFilter"
import { SizesFilter } from "./SizesFilter"
import { AvailabilityFilter } from "./AvailabilityFilter"
import { PriceFilter } from "./PriceFilter"

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
        <AvailabilityFilter />
        <PriceFilter data={data && data} />
        <button type="submit" className="btn">
          Показать товары
        </button>
      </fieldset>
    </form>
  )
}