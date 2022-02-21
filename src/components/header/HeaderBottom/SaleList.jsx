export const SaleList = ({ data }) => {
  return (
    <li class="header menu__item">
      <a href={data && data.link}
        class="header__sale-wrapper menu__name">
        <span class="header__sale">
          {data && data.title}
        </span>
      </a>
    </li>
  )
}