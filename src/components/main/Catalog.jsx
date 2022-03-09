import axios from 'axios';
import { useState, useEffect } from 'react';
import { CatalogFilter } from "./Catalog/CatalogFilter";
import { CatalogMain } from './Catalog/CatalogMain';
import { Good } from "./Index/Good";


export const Catalog = () => {
  const h1Title = "Головные уборы"
  const pTtile = "Шапочки, кепки и шляпы Lassie® защищают круглый год. Выбирайте подходящий головной убор: шляпку с полями или кепку с козырьком на лето, тоненькую шапочку без подкладки на осень или весну, и шапку с подкладкой из флиса или джерси на зиму. Многие наши шапочки имеют специальные ветронепроницаемые вставки в области ушей для дополнительной защиты. Для самых маленьких лучшим выбором во время метели и снежной бури станут наши ветрозащитные зимние шапки или шапки из искусственного меха."
  const [goods, setGoods] = useState(undefined)

  useEffect(() => {
    axios.get('/goods.json')
      .then(res => setGoods(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container">
      <h1>{h1Title}</h1>
      <p data-block={0} className="catalog-page__text">{pTtile}</p>
      <a
        href="!#"
        data-btn={0}
        data-text="Скрыть текст"
        className="js-block-show link text"
      >
        Читать далее
      </a>
      <a
        href="!#"
        data-btn={1}
        data-text="Скрыть фильтр"
        className="js-block-show link text"
      >
        Показать фильтр
      </a>
      <div className="catalog catalog-page__catalog">
        <CatalogFilter data={goods && goods} />
        <CatalogMain data={goods && goods} />
      </div>
      <p data-block={2} className="catalog-page__text">
        Шапочки, кепки и шляпы Lassie® защищают круглый год. Выбирайте подходящий головной убор: шляпку с полями или кепку с козырьком на лето, тоненькую шапочку без подкладки на осень или весну, и шапку с подкладкой из флиса или джерси на зиму. Многие наши шапочки имеют специальные ветронепроницаемые вставки в области ушей для дополнительной защиты. Для самых маленьких лучшим выбором во время метели и снежной бури станут наши ветрозащитные зимние шапки или шапки из искусственного меха.
      </p>
      <a
        href="!#"
        data-btn={2}
        data-text="Скрыть текст"
        className="js-block-show link text"
      >
        Читать далее
      </a>
    </div >
  )
}