import { DropdownMenu } from "./DropdownMenu"

export const MenuItem = () => {
    return (
        <li className="menu__item">
            <a href="!#" className="menu__name">
                Коллекции
            </a>
            <DropdownMenu />
        </li>
    )
}