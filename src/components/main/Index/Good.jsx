import { Link } from "react-router-dom"
import { GoodSizes } from "./GoodSizes"

export const Good = ({ data }) => {
  let typeSpan
  if (data && data.type) {
    typeSpan = <span className={`flag flag_type_${data.type}`}>{data.type}</span>
  } else {
    typeSpan = <span className="flag"></span>
  }

  return (
    <li className="goods__item" >
      <article className="good">
        <div className="good__content">
          <Link to={data && data.id} className="good__link">
            <img
              src={data && data.imgLink[0]}
              alt={data && data.imgAlt}
              className="good__img"
              title=""
            />
            {typeSpan}
          </Link>
          <a href="!#" className="like">
            Мне нравится
          </a>
          <h4 className="good__name">{data && data.name}</h4>
          <div className="good__price-wrapper">
            <span className="good__price">{data && data.price}.</span>
          </div>
        </div>
        <div className="good__hover">
          <form method="post" action="" className="form good__order">
            <div className="good__order-row">
              <label className="good__order-label">Выберите размер</label>
              {data && data.sizes.map((el, i) => (
                <GoodSizes key={`${data.id}${i}`} data={el} id={data.id} />
              ))}
            </div>
            <div className="good__order-row">
              <label htmlFor={`${data && data.id}-num`} className="good__order-label">
                Количество
              </label>
              <div className="input-number">
                <input
                  id={`${data && data.id}-num`}
                  name={`${data && data.id}[number]`}
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
      </article >
    </li >
  )
}