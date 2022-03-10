export const PaymentMenthod = ({ data }) => {
  return (
    <div className="radio">
      <input
        id={data.id}
        name={data.name}
        type="radio"
        defaultValue={data.type}
        required=""
        className="radio__elem"
      />
      <label htmlFor={data.id} className="form__label radio__label">
        {data.title}
      </label>
    </div>
  )
}