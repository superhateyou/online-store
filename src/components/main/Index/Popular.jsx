import axios from 'axios';
import { Good } from "./Good"
import { useEffect, useState } from 'react'

export const Popular = () => {
  const [goods, setGoods] = useState(undefined)

  useEffect(() => {
    axios.get('/goods.json')
      .then(res => setGoods(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="popular">
      <div className="container">
        <h1 className="heading">
          <span className="heading__text">Популярные товары</span>
        </h1>
        <ul className="goods">
          {goods?.map(el => (<Good data={el} key={el.id} />))}
          <li className="goods__item" />
          <li className="goods__item" />
          {/*В конце списка товаров нужно добавлять 2 пустых элемента для равномерного выравнивания элементов на любом разрешении экрана*/}
        </ul>
      </div>
    </section>
  )
}