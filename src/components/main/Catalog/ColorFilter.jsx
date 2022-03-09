export const ColorFilter = ({ data }) => {
  const colors = data?.map(el => el.color)
    .reduce((prev, curr) => prev.concat(curr), [])
    .filter((e, i, a) => a.indexOf(e) === i)
  return (
    <div className="form__row form__row_direction_column">
      <label className="form__label">Цвет</label>
      <div className="form__content-group">
        {
          colors?.map((el, i) => (
            <div className="checkbox-tile checkbox-tile_size_big" key={`filter-color-${i}`}>
              <input
                id={`filter-color-${i}`}
                name={`Filter[${el}]`}
                type="checkbox"
                className="checkbox-tile__elem"
              />
              <label
                htmlFor={`filter-color-${i}`}
                className={`checkbox-tile__label checkbox-tile__label_color_${el} checkbox-tile__label_type_color`}
              >
              </label>
            </div>
          ))
        }
      </div>
    </div>
  )
}