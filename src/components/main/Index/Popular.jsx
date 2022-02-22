import { Good } from "./Good"

export const Popular = ({ data }) => {
  return (
    <section className="popular">
      <div className="container">
        <h1 className="heading">
          <span className="heading__text">Популярные товары</span>
        </h1>
        <ul className="goods">
          {data?.map(el => (<Good data={el} key={el.id} />))}
          <li className="goods__item" />
          <li className="goods__item" />
          {/*В конце списка товаров нужно добавлять 2 пустых элемента для равномерного выравнивания элементов на любом разрешении экрана*/}
        </ul>
      </div>
    </section>
  )
}