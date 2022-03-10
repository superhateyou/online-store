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
          {inputs?.info.label ? <legend className="form__title">{inputs.info.label}</legend> : null}
          {inputs?.info?.fields?.map(el => <CustomerInfo data={el} key={el.id} />)}
        </fieldset>
        <fieldset className="form__fieldset">
          {inputs?.order.label ? <legend className="form__title">{inputs.order.label}</legend> : null}
          {inputs?.order.columns?.map(el => (
            <div key={el.id}>
              {el.label ? <label className="form__label">{el.label}</label> : null}
              {el.info ? <div className="form__info">
                {el.info}
              </div> : null}
              {el.fields?.map(field => <DeliveryMethod key={field.id} data={field} />)}
            </div>
          ))}
        </fieldset>
        <fieldset className="form__fieldset">
          {inputs?.payment.label ? <legend className="form__title">{inputs.payment.label}</legend> : null}
          {inputs?.payment.fields?.map(el => <PaymentMenthod key={el.id} data={el} />)}
        </fieldset>
      </form>
    </div >
  )
}