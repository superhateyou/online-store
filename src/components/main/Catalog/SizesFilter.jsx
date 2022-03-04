export const SizesFilter = ({ data }) => {
  const sizes = data?.map(el => el.sizes)
    .flat().map(el => el.size)
    .filter((e, i, a) => a.indexOf(e) === i)
  console.log(sizes)
  return (
    <div className="form__row form__row_direction_column">
      <label className="form__label">Размер</label>
      <div className="form__content-group">
        {sizes?.map((el, i) => (
          <div className="checkbox-tile checkbox-tile_size_big">
            <input
              id={`filter-size-${i}`}
              name={`Filter[${el}]`}
              type="checkbox"
              className="checkbox-tile__elem"
            />
            <label htmlFor={`filter-size-${i}`} className="checkbox-tile__label">
              {el}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}