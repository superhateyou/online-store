export const PriceFilter = ({ data }) => {
  // const prices = data?.map(el => el.price)
  // const minPrice = Math.min.apply(null, prices)
  // const maxPrice = Math.min.apply(null, prices)
  // console.log(prices)
  return (
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
  )
}