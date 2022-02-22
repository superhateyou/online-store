import { Link } from "react-router-dom"

export const CatalogList = ({ data }) => {
  if (data) {
    return (
      <li className="menu__item">
        <Link to={data.link}
          className="menu__name">{data && data.title}
        </Link>
      </li>
    )
  } else return (
    <li className="menu__item">
      <Link to="!#"
        className="menu__name">{data && data.title}
      </Link>
    </li>
  )
}