import { CustomerInfo } from "./Order/СustomerInfo"

export const Order = () => {
  return (
    <div className="container">
      <h1 class="title">Оформление заказа</h1>
      <form className="form js-form-validate order-page__form">
        <CustomerInfo />
      </form>
    </div>
  )
}