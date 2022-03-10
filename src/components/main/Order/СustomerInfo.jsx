export const CustomerInfo = ({ data }) => {
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
        />
        {data.hint ? <div className="form__info">{data.hint}</div> : null}
      </div>
      {data.formInfo ? <div className="form__col">
        <div className="form__info">{data.formInfo}</div>
      </div> : null}
    </div>
  )
}