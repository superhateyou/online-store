export const Slider = ({ data }) => {
  return (
    <div className="index__slider slider">
      <ul className="slider__container">
        {data && data.map(el => (
          <li className="slider__item">
            <img src={el.link} alt="" className="slider__img" />
            <div className="index__slider-title">
              {el.title_1}
              <br />{el.title_2}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}