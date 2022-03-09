export const CustomerInfo = () => {
  return (
    <fieldset className="form__fieldset">
      <legend className="form__title">Информация о покупателе</legend>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-name" className="form__label">
            Фамилия, имя, отчество
          </label>
        </div>
        <div className="form__col form__col_width_375">
          <input
            id="order-name"
            name="Order[name]"
            required=""
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-mail" className="form__label">
            Электронная почта
          </label>
        </div>
        <div className="form__col form__col_width_260">
          <input
            id="order-mail"
            name="Order[mail]"
            type="email"
            required=""
            className="input"
          />
        </div>
        <div className="form__col">
          <div className="form__info">
            Мы не рассылаем спам и не передаем информацию третьим лицам
          </div>
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-phone" className="form__label">
            Контактный телефон
          </label>
        </div>
        <div className="form__col form__col_width_260">
          <input
            id="order-phone"
            name="Order[phone]"
            type="tel"
            required=""
            className="input"
          />
          <div className="form__info">Например, 9051234567</div>
        </div>
        <div className="form__col">
          <div className="form__info">Необходим для подтверждения заказа</div>
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-city" className="form__label">
            Город
          </label>
        </div>
        <div className="form__col form__col_width_260">
          <input
            id="order-city"
            name="Order[city]"
            required=""
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-street" className="form__label">
            Улица
          </label>
        </div>
        <div className="form__col form__col_width_260">
          <input
            id="order-street"
            name="Order[street]"
            required=""
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-postcode" className="form__label">
            Почтовый индекс
          </label>
        </div>
        <div className="form__col form__col_width_260">
          <input
            id="order-postcode"
            name="Order[postcode]"
            required=""
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-house" className="form__label">
            Номер дома
          </label>
        </div>
        <div className="form__col form__col_width_90">
          <input
            id="order-house"
            name="Order[house]"
            required=""
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-housing" className="form__label">
            Корпус
          </label>
        </div>
        <div className="form__col form__col_width_90">
          <input
            id="order-housing"
            name="Order[housing]"
            className="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__col form__col_width_220">
          <label htmlFor="order-apartment" className="form__label">
            Номер квартиры
          </label>
        </div>
        <div className="form__col form__col_width_90">
          <input
            id="order-apartment"
            name="Order[apartment]"
            className="input"
            type="text"
          />
        </div>
      </div>
    </fieldset>
  )
}