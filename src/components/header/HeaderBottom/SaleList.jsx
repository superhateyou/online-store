import { Link } from "react-router-dom"

export const SaleList = ({ data }) => {
  if (data) {
    return (
      <li className="header menu__item">
        <Link to={data && data.link}
          className="header__sale-wrapper menu__name">
          <span className="header__sale">
            {data && data.title}
          </span>
        </Link>
      </li>
    )
  } else return (
    <li className="header menu__item">
      <Link to="!#"
        className="header__sale-wrapper menu__name">
        <span className="header__sale">
          {data && data.title}
        </span>
      </Link>
    </li>
  )
}