export const CardRecs = () => {
  return (
    <div>
      <article className="product-page__section">
        <h2 className="heading product-page__title">
          <span className="heading__text">С этим товаром покупают</span>
        </h2>
        <ul className="goods product-page__goods">
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-1.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_new">new</span>
                </a>
                <a href="javascript:void(0);" className="like">
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
                      <label htmlFor="good0-size0" className="checkbox-tile__label">
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
                      <label htmlFor="good0-size1" className="checkbox-tile__label">
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
                      <label htmlFor="good0-size2" className="checkbox-tile__label">
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
                      <label htmlFor="good0-size3" className="checkbox-tile__label">
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
                      <label htmlFor="good0-size4" className="checkbox-tile__label">
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-2.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_sale">sale</span>
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">
                  Зимний комбинезон для новорожденных Grian
                </h4>
                <div className="good__price-wrapper">
                  <span className="good__price good__price_new">2 899 р.</span>
                  <span className="good__price good__price_old">3 899 р.</span>
                  <span className="good__discount">Скидка 30%</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good1-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good1-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good1-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good1-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good1-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        disabled=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good1-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good1-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good1-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good1-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good1-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good1-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good1-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-3.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_new">new</span>
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">Кросовки Reimatec® для детей Wetter</h4>
                <div className="good__price-wrapper">
                  <span className="good__price">3 299 р.</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good2-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good2-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good2-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good2-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good2-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good2-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good2-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good2-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good2-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good2-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good2-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good2-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-4.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">
                  Детская зимняя куртка Reimatec® Dinkar
                </h4>
                <div className="good__price-wrapper">
                  <span className="good__price">3 899 р.</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        disabled=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good3-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good3-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-5.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_hit">hit</span>
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">Пинетки для новорожденных Neuvo</h4>
                <div className="good__price-wrapper">
                  <span className="good__price">849 р.</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good4-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good4-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good4-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good4-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good4-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good4-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good4-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good4-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good4-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good4-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good4-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good4-num"
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
          </li>
        </ul>
      </article>
      <article className="product-page__section">
        <h2 className="heading product-page__title">
          <span className="heading__text">Рекомендуем</span>
        </h2>
        <ul className="goods product-page__goods">
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-1.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_new">new</span>
                </a>
                <a href="javascript:void(0);" className="like">
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
                        id="good5-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good5-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good5-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good5-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good5-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good5-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good5-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good5-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good5-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good5-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good5-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good5-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-2.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_sale">sale</span>
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">
                  Зимний комбинезон для новорожденных Grian
                </h4>
                <div className="good__price-wrapper">
                  <span className="good__price good__price_new">2 899 р.</span>
                  <span className="good__price good__price_old">3 899 р.</span>
                  <span className="good__discount">Скидка 30%</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good6-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good6-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good6-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good6-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good6-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        disabled=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good6-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good6-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good6-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good6-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good6-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good6-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good6-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-3.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_new">new</span>
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">Кросовки Reimatec® для детей Wetter</h4>
                <div className="good__price-wrapper">
                  <span className="good__price">3 299 р.</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good7-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good7-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good7-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good7-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good7-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good7-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good7-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good7-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good7-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good7-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good7-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good7-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-4.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">
                  Детская зимняя куртка Reimatec® Dinkar
                </h4>
                <div className="good__price-wrapper">
                  <span className="good__price">3 899 р.</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        disabled=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good3-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good3-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good3-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good3-num"
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
          </li>
          <li className="goods__item">
            <article className="good">
              <div className="good__content">
                <a href="javascript:void(0);" className="good__link">
                  <img
                    src="assets/images/good-5.jpg"
                    alt="Товар"
                    className="good__img"
                    title=""
                  />
                  <span className="flag flag_type_hit">hit</span>
                </a>
                <a href="javascript:void(0);" className="like">
                  Мне нравится
                </a>
                <h4 className="good__name">Пинетки для новорожденных Neuvo</h4>
                <div className="good__price-wrapper">
                  <span className="good__price">849 р.</span>
                </div>
              </div>
              <div className="good__hover">
                <form method="post" action="" className="form good__order">
                  <div className="good__order-row">
                    <label className="good__order-label">Выберите размер</label>
                    <div className="checkbox-tile">
                      <input
                        id="good8-size0"
                        name="Good[size]"
                        type="radio"
                        defaultValue={74}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good8-size0" className="checkbox-tile__label">
                        74
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good8-size1"
                        name="Good[size]"
                        type="radio"
                        defaultValue={80}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good8-size1" className="checkbox-tile__label">
                        80
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good8-size2"
                        name="Good[size]"
                        type="radio"
                        defaultValue={86}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good8-size2" className="checkbox-tile__label">
                        86
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good8-size3"
                        name="Good[size]"
                        type="radio"
                        defaultValue={92}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good8-size3" className="checkbox-tile__label">
                        92
                      </label>
                    </div>
                    <div className="checkbox-tile">
                      <input
                        id="good8-size4"
                        name="Good[size]"
                        type="radio"
                        defaultValue={98}
                        required=""
                        className="checkbox-tile__elem"
                      />
                      <label htmlFor="good8-size4" className="checkbox-tile__label">
                        98
                      </label>
                    </div>
                  </div>
                  <div className="good__order-row">
                    <label htmlFor="good8-num" className="good__order-label">
                      Количество
                    </label>
                    <div className="input-number">
                      <input
                        id="good8-num"
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
          </li>
        </ul>
      </article>
    </div>
  )
}