export const AvailabilityFilter = () => {
  return (
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
  )
}