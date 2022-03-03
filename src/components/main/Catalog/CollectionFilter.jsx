export const CollectionFilter = ({ data }) => {
  const collections = data?.map(el => el.collection)
    .reduce((prev, curr) => prev.concat(curr), [])
    .filter((e, i, a) => a.indexOf(e) === i)
  console.log(collections)
  return (
    <div className="form__row form__row_direction_column">
      <label className="form__label">Коллекция</label>
      {collections?.map((el, i) => (
        <div className="checkbox">
          <input
            id={`filter-collection-${i}`}
            name={`Filter[${el}]`}
            type="checkbox"
            disabled=""
            className="checkbox__elem"
          />
          <label
            htmlFor={`filter-collection-${i}`}
            className="checkbox__label form__label"
          >
            {el}
          </label>
        </div>
      ))}
    </div>
  )
}