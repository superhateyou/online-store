export const SaleList = ({ data }) => {
  return (
    <li className="header menu__item">
      <a href={data && data.link}
        className="header__sale-wrapper menu__name">
        <span className="header__sale">
          {data && data.title}
        </span>
      </a>
    </li>
  )
}