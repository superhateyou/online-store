export const CatalogList = ({ data }) => {
  return (
    <li className="menu__item"><a href={data && data.link}
      className="menu__name">{data && data.title}</a>
    </li>
  )
}