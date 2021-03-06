import { useState } from "react"

export const CustomerComponent = ({ data, handler }) => {
  const [inputState, setInputState] = useState('')

  const inputHandler = (e) => {
    setInputState(e.target.value)
    data.value = e.target.value
  }

  const blurHandler = () => {
    handler(data)
  }

  return (
    <div className="form__row">
      <div className="form__col form__col_width_220">
        <label htmlFor={data.id} className="form__label">
          {data.title}
        </label>
      </div>
      <div className={`form__col ${data.inputClass}`}>
        <input
          id={data.id}
          name={data.name}
          required=""
          className="input"
          type={data.type}
          value={inputState}
          onBlur={e => blurHandler(e)}
          onInput={e => inputHandler(e)}
        />
        {data.hint ? <div className="form__info">{data.hint}</div> : null}
      </div>
      {data.formInfo ? <div className="form__col">
        <div className="form__info">{data.formInfo}</div>
      </div> : null}
    </div>
  )
}