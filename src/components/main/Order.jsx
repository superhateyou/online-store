import axios from 'axios';
import { useState, useEffect } from 'react';
import { DeliveryMethod } from './Order/DeliveryMethod';
import { CustomerInfo } from './Order/СustomerInfo';
import { PaymentMenthod } from './Order/PaymentMethod';

export const Order = () => {
  const [order, setOrder] = useState({})
  const [inputs, setInputs] = useState(undefined)

  useEffect(() => {
    axios.get('/inputs.json')
      .then(res => setInputs(res.data))
      .catch(err => console.log(err))
  }, [])

  const changeHandler = (inputState) => {  //main handler
    setOrder({ ...order, [inputState.id]: inputState.value || inputState.checked })
  }

  console.log(order)

  return (
    <div className="container">
      <h1 className="title">Оформление заказа</h1>
      <form className="form js-form-validate order-page__form">
        <CustomerInfo data={inputs?.info} handler={changeHandler} />
        <DeliveryMethod data={inputs?.order} handler={changeHandler} />
        <PaymentMenthod data={inputs?.payment} handler={changeHandler} />
      </form>
    </div >
  )
}