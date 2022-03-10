import { useState } from "react"

export const DeliveryComponent = ({ data, handler }) => {
  const [inputState, setInputState] = useState(false)

  const inputHandler = (e) => {
    setInputState(e.target.checked)
    data.value = e.target.checked
  }

  const blurHandler = () => {
    handler(data)
  }

  return (
    <div className="form__checkbox-group">
      <div className="checkbox">
        <input
          id={data.id}
          name={data.name}
          type="checkbox"
          required=""
          className="checkbox__elem"
          checked={inputState}
          onChange={e => blurHandler()}
          onClick={e => inputHandler(e)}
        />
        <label
          htmlFor={data.id}
          className="checkbox__label form__label"
        >
          {data.title}
        </label>
      </div>
      <div className="form__label">{data.price} руб.</div>
    </div>
  )
}