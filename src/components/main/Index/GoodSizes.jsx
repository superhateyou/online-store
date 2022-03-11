export const GoodSizes = ({ data, id }) => {
  return (
    <div className="checkbox-tile">
      <input
        id={`${id}-size${data.size}`}
        name={`${id}[${data.size}]`}
        type="radio"
        defaultValue={data.size}
        required=""
        disabled={data.isStock}
        className="checkbox-tile__elem"
      />
      <label
        htmlFor={`${id}-size${data.size}`}
        className="checkbox-tile__label"
      >
        {data.size}
      </label>
    </div>
  )
} 