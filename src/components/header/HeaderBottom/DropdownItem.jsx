import { VertMenuItem } from "./VertMenuItem"

export const DropdownItem = ({ data }) => {
  return (
    <li className="dropdown-menu__content">
      <div className="dropdown-menu__img">
        <img src={data.ddImg.link} alt={data.ddImg.alt} />
      </div>
      <div className="dropdown-menu__menu-col">
        <ul className="vertical-menu">
          {data.ddItems.list.map(el => (
            <VertMenuItem key={el.id} data={el.list} />
          ))}
        </ul>
      </div>
    </li>
  )
}