import { DropdownContentCol } from "./DropdownContentCol"
import img from './../../../assets/images/header-submenu-1.jpg'

export const DropdownContent = () => {
    return (
        <li className="dropdown-menu__content">
            <div className="dropdown-menu__img">
                <img src={img} alt="девочка" />
              </div>
              <DropdownContentCol />
        </li>
    )
}