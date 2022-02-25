export const CardPopUp = ({ data }) => {
  return (
    <div data-popup="good" className="popup">
      <div className="popup-good popup__content">
        <div className="popup-good__title">Товар добавлен в корзину</div>
        <img
          src={data && data.imgLink[0]}
          alt="Фото товара"
          className="popup-good__img"
          title=""
        />
        <p className="popup-good__desc text">
          {data && data.name}
        </p>
        <div className="popup-good__row">
          <a
            href={data && data.link}
            className="btn btn_border js-popup-close popup-good__btn"
          >
            Вернуться в каталог
          </a>
          <a href="!#" className="btn popup-good__btn">
            Оформить заказ
          </a>
        </div>
      </div>
    </div>
  )
}