export const GenderFilter = ({ data }) => {
  const genders = data?.map(el => el.gender)
    .reduce((prev, curr) => prev.concat(curr), [])
    .filter((e, i, a) => a.indexOf(e) === i)
  console.log(genders)
  return (
    <div className="form__row form__row_direction_column">
      <label className="form__label">Пол</label>
      {
        genders?.map((el, i) => (
          <div className="checkbox">
            <input
              id={`filter-gender-${i}`}
              name={`Filter[${el}]`}
              type="checkbox"
              className="checkbox__elem"
            />
            <label
              htmlFor={`filter-gender-${i}`}
              className="checkbox__label form__label"
            >
              {el === "boy" ? "Мальчик" : el === "girl" ? "Девочка" : "Унисекс"}
            </label>
          </div>
        ))
      }
    </div>
  )
}