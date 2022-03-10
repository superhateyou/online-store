import axios from 'axios';
import { useState, useEffect } from 'react';
import { DeliveryMethod } from './Order/DeliveryMethod';
import { CustomerInfo } from './Order/СustomerInfo';
import { PaymentMenthod } from './Order/PaymentMethod';

export const Order = () => {
  const [inputs, setInputs] = useState(undefined)

  useEffect(() => {
    axios.get('/inputs.json')
      .then(res => setInputs(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(inputs)

  return (
    <div className="container">
      <h1 className="title">Оформление заказа</h1>
      <form className="form js-form-validate order-page__form">
        <fieldset className="form__fieldset">
          <legend className="form__title">Информация о покупателе</legend>
          {inputs?.info?.map(el => <CustomerInfo data={el} key={el.id} />)}
        </fieldset>
        <fieldset className="form__fieldset">
          <legend className="form__title">Способ доставки</legend>
          {inputs?.order?.map(el => (
            <div key={el.id}>
              {el.deliveryLabel ? <label className="form__label">{el.deliveryLabel}</label> : null}
              {el.deliveryInfo ? <div className="form__info">
                {el.deliveryInfo}
              </div> : null}
              {el.fields?.map(field => <DeliveryMethod key={field.id} data={field} />)}
            </div>
          ))}
        </fieldset>
        <fieldset className="form__fieldset">
          <legend className="form__title">Способ оплаты</legend>
          {inputs?.payment?.map(el => <PaymentMenthod key={el.id} data={el} />)}
        </fieldset>
      </form>
    </div >
  )
}