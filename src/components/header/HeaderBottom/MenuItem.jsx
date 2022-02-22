import { Link } from "react-router-dom"
import { DropdownItem } from "./DropdownItem"

export const MenuItem = ({ data }) => {
  return (
    <li className="menu__item">
      <Link to={data.link} className="menu__name">
        {data.menuName}
      </Link>
      <ul className="dropdown-menu">
        <DropdownItem data={data.ddMenu} />
      </ul>
    </li>
  )
}