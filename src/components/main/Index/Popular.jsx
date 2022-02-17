import { Good } from "./Good"


export const Popular = () => {
  return (
    <section className="popular">
      <div className="container">
        <h1 className="heading">
          <span className="heading__text">Популярные товары</span>
        </h1>
        <ul className="goods">
          <Good />
          <Good />
          <Good />
          <Good />
          <li className="goods__item" />
          <li className="goods__item" />
          {/*В конце списка товаров нужно добавлять 2 пустых элемента для равномерного выравнивания элементов на любом разрешении экрана*/}
        </ul>
      </div>
    </section>
  )
}