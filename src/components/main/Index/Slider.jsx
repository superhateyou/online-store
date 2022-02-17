export const Slider = () => {
  return (
    <div className="index__slider slider">
      <ul className="slider__container">
        <li className="slider__item">
          <img src="/assets/images/slider-1.jpg" alt="" className="slider__img" />
          <div className="index__slider-title">
            Встречаем осень
            <br />с новой коллекцией
          </div>
        </li>
        <li className="slider__item">
          <img src="/assets/images/slider-2.jpg" alt="" className="slider__img" />
          <div className="index__slider-title">
            Встречаем зиму
            <br />с новой коллекцией
          </div>
        </li>
        <li className="slider__item">
          <img src="/assets/images/slider-3.jpg" alt="" className="slider__img" />
          <div className="index__slider-title">
            Встречаем весну
            <br />с новой коллекцией
          </div>
        </li>
      </ul>
    </div>
  )
}