import { CardRow } from "./CardRow"
import { Gallery } from "./Gallery"
import { ProductPrice } from "./ProductPrice"

export const CardTop = ({ data }) => {
  console.log(data)
  return (
    <div className="card__top">
      <Gallery data={data && data.imgLink} id={data && data.id} />
      <div className="card__info">
        <header className="card__info-header">
          <span className="flag flag_type_new">{data && data.type}</span>
          <h1 className="card__name">{data && data.name}</h1>
          <div className="card__id text">{data && data.id}</div>
        </header>
        <div className="card__content-block">
          <ProductPrice discount={data && data.discount} price={data && data.price} />
          <div className="card__discount text">Скидка: {data && data.discount}</div>
        </div>
        <div className="card__content-block">
          <div className="card__subtitle text">Материал:</div>
          {data ? data.composition.map((el, i) => <div key={`composition_${data && data.id}_${i}`} className="text">{el}</div>) : undefined}
        </div>
        <form method="post" action="" className="form">
          <div className="card__content-block">
            <div className="card__subtitle text">Выберите размер:</div>
            <div className="card__content-row card__content-row_checkboxes">
              <div className="checkbox-tile checkbox-tile_size_extra">
                {data && data.sizes.map((el, i) => (<CardRow data={el} index={i} key={`size_${data && data.id}_${i}`} />))}
              </div>
            </div>
            <a href="!#" className="link text">
              Сообщить о поступлении размера
            </a>
          </div>
          <div className="card__content-block card__content-block_margin_30">
            <div className="card__subtitle text">Количество:</div>
            <div className="card__content-row">
              <div className="card__number input-number">
                <input
                  id="card-num"
                  name="Card[number]"
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
              <div className="card__avaible text">Есть в наличии</div>
            </div>
          </div>
          <button
            type="submit"
            data-popup="good"
            className="btn form__btn js-popup-open"
          >
            Добавить в корзину
          </button>
        </form>
      </div>
    </div>
  )
}