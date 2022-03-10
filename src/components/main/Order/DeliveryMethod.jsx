export const DeliveryMethod = ({ data }) => {
  return (
    <div className="form__checkbox-group">
      <div className="checkbox">
        <input
          id={data.id}
          name={data.name}
          type="checkbox"
          required=""
          className="checkbox__elem"
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
    /* <div className="form__checkbox-group">
      <div className="checkbox">
        <input
          id="order-delivery-2"
          name="Order[delivery]"
          type="checkbox"
          defaultValue="DPD"
          required=""
          className="checkbox__elem"
        />
        <label
          htmlFor="order-delivery-2"
          className="checkbox__label form__label"
        >
          DPD
        </label>
      </div>
      <div className="form__label">355 руб.</div>
    </div>
  </div>
  <div className="form__row form__row_direction_column">
    <label className="form__label">Почтовое отправление</label>
    <div className="form__checkbox-group">
      <div className="checkbox">
        <input
          id="order-delivery-3"
          name="Order[delivery]"
          type="checkbox"
          defaultValue="post"
          required=""
          className="checkbox__elem"
        />
        <label
          htmlFor="order-delivery-3"
          className="checkbox__label form__label"
        >
          Почта России
        </label>
      </div>
      <div className="form__label">200 руб.</div>
    </div>
  </div> */
  )
}