export const GoodSizes = ({ data, id }) => {
  return (
    <div className="checkbox-tile" key={`${data.id}${id}`}>
      <input
        id={`${data.id}-size${data.size}`}
        name={`${data.id}[${data.size}]`}
        type="radio"
        defaultValue={data.size}
        required=""
        disabled={data.isStock}
        className="checkbox-tile__elem"
      />
      <label
        htmlFor={`${data.id}-size${data.size}`}
        className="checkbox-tile__label"
      >
        {data.size}
      </label>
    </div>
  )
} 