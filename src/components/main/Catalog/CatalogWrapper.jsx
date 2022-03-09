import { Good } from "../Index/Good"

export const CatalogWrapper = ({ data }) => {
  return (
    <div className="catalog__goods-wrapper">
      <ul className="goods">
        {data?.map(el => (<Good data={el} key={el.id} />))}
        {data?.map(el => (<Good data={el} key={el.id + 1} />))}
        <li className="goods__item" />
        <li className="goods__item" />
        {/*В конце списка товаров нужно добавлять 2 пустых элемента для равномерного выравнивания элементов на любом разрешении экрана*/}
      </ul>
    </div>
  )
}