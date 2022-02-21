export const CatalogList = ({ data }) => {
  return (
    <li class="menu__item"><a href={data && data.link}
      class="menu__name">{data && data.title}</a>
    </li>
  )
}