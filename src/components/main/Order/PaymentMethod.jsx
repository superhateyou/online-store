import { useState } from "react"

export const PaymentMenthod = ({ data, handler }) => {
  const [inputState, setInputState] = useState('')

  const inputHandler = (e) => {
    setInputState(e.target.value)
    let state = { value: e.target.value, id: "order-payment" }
    handler(state)
  }

  return (
    <fieldset className="form__fieldset">
      {data?.label ? <legend className="form__title">{data.label}</legend> : null}
      {data?.fields?.map(el => (
        <div className="radio" key={el.id}>
          <input
            id={el.id}
            name={el.name}
            type="radio"
            required=""
            value={el.type}
            className="radio__elem"
            checked={inputState === el.type ? true : false}
            onChange={e => inputHandler(e)}
          />
          <label htmlFor={el.id} className="form__label radio__label">
            {el.title}
          </label>
        </div>
      ))}
    </fieldset>
  )
}