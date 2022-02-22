import { DropdownItem } from "./DropdownItem"

export const MenuItem = ({ data }) => {
  return (
    <li className="menu__item">
      <a href={data.link} className="menu__name">
        {data.menuName}
      </a>
      <ul className="dropdown-menu">
        <DropdownItem data={data.ddMenu} />
      </ul>
    </li>
  )
}