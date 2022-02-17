export const Good = () => {
  return (
    <li className="goods__item" >
      <article className="good">
        <div className="good__content">
          <a href="!#" className="good__link">
            <img
              src="assets/images/good-1.jpg"
              alt="Товар"
              className="good__img"
              title=""
            />
            <span className="flag flag_type_new">new</span>
          </a>
          <a href="!#" className="like">
            Мне нравится
          </a>
          <h4 className="good__name">Шапка-бини для новорожденных Hilal</h4>
          <div className="good__price-wrapper">
            <span className="good__price">1 599 р.</span>
          </div>
        </div>
        <div className="good__hover">
          <form method="post" action="" className="form good__order">
            <div className="good__order-row">
              <label className="good__order-label">Выберите размер</label>
              <div className="checkbox-tile">
                <input
                  id="good0-size0"
                  name="Good[size]"
                  type="radio"
                  defaultValue={74}
                  required=""
                  className="checkbox-tile__elem"
                />
                <label
                  htmlFor="good0-size0"
                  className="checkbox-tile__label"
                >
                  74
                </label>
              </div>
              <div className="checkbox-tile">
                <input
                  id="good0-size1"
                  name="Good[size]"
                  type="radio"
                  defaultValue={80}
                  required=""
                  className="checkbox-tile__elem"
                />
                <label
                  htmlFor="good0-size1"
                  className="checkbox-tile__label"
                >
                  80
                </label>
              </div>
              <div className="checkbox-tile">
                <input
                  id="good0-size2"
                  name="Good[size]"
                  type="radio"
                  defaultValue={86}
                  required=""
                  className="checkbox-tile__elem"
                />
                <label
                  htmlFor="good0-size2"
                  className="checkbox-tile__label"
                >
                  86
                </label>
              </div>
              <div className="checkbox-tile">
                <input
                  id="good0-size3"
                  name="Good[size]"
                  type="radio"
                  defaultValue={92}
                  required=""
                  className="checkbox-tile__elem"
                />
                <label
                  htmlFor="good0-size3"
                  className="checkbox-tile__label"
                >
                  92
                </label>
              </div>
              <div className="checkbox-tile">
                <input
                  id="good0-size4"
                  name="Good[size]"
                  type="radio"
                  defaultValue={98}
                  required=""
                  className="checkbox-tile__elem"
                />
                <label
                  htmlFor="good0-size4"
                  className="checkbox-tile__label"
                >
                  98
                </label>
              </div>
            </div>
            <div className="good__order-row">
              <label htmlFor="good0-num" className="good__order-label">
                Количество
              </label>
              <div className="input-number">
                <input
                  id="good0-num"
                  name="Good[number]"
                  type="number"
                  step={1}
                  min={1}
                  required=""
                  className="input-number__elem"
                />
                <div className="input-number__counter">
                  <span className="input-number__counter-spin input-number__counter-spin_more">
                    Больше
                  </span>
                  <span className="input-number__counter-spin input-number__counter-spin_less">
                    Меньше
                  </span>
                </div>
              </div>
            </div>
            <button type="submit" className="btn">
              Добавить в корзину
            </button>
          </form>
        </div>
      </article>
    </li >
  )
}