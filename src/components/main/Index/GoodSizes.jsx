export const GoodSizes = ({ data, id }) => {
  if (data.isStock === true) {
    return (
      <div className="checkbox-tile" key={`${data.id}${id}`}>
        <input
          id={`${data.id}-size${data.size}`}
          name={`${data.id}[${data.size}]`}
          type="radio"
          defaultValue={data.size}
          required=""
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
  } else return (
    <div className="checkbox-tile" key={`${data.id}${data.size}`}>
      <input
        id={`${data.id}-size${data.size}`}
        name={`${data.id}[${data.size}]`}
        type="radio"
        defaultValue={data.size}
        disabled
        required=""
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