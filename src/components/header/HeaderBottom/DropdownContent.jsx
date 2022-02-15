import { DropdownContentCol } from "./DropdownContentCol"

export const DropdownContent = () => {
    return (
        <li className="dropdown-menu__content">
            <div className="dropdown-menu__img">
                <img src="/public/assets/images/header-submenu-1.jpg" alt="девочка" />
              </div>
              <DropdownContentCol />
        </li>
    )
}