import axios from 'axios';
import { useEffect, useState } from 'react'

export const Slider = () => {
  const [main, setMain] = useState(undefined)

  useEffect(() => {
    axios.get('/main.json')
      .then(res => setMain(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(main)

  return (
    <div className="index__slider slider">
      <ul className="slider__container">
        {main?.map(el => (
          <li className="slider__item" key={el.id}>
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