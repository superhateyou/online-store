export const SeasonFilter = ({ data }) => {
  const seasons = data?.map(el => el.season)
    .reduce((prev, curr) => prev.concat(curr), [])
    .filter((e, i, a) => a.indexOf(e) === i)
  return (
    <div className="form__row form__row_direction_column">
      <label className="form__label">Сезон</label>
      {
        seasons?.map((el, i) => (
          <div className="checkbox" key={`filter-season-${i}`}>
            <input
              id={`filter-season-${i}`}
              name={`Filter[${el}]`}
              type="checkbox"
              className="checkbox__elem"
            />
            <label
              htmlFor={`filter-season-${i}`}
              className="checkbox__label form__label"
            >
              {el}
            </label>
          </div>
        ))
      }
    </div>
  )
}