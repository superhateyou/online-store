import { TopMenuItem } from "./TopMenuItem"

export const TopMenu = () => {
    const tempArr = ["О компании", "Оплата", "Доставка"]

    return (
        <ul className="header__top-menu menu">
            {tempArr.map(el => <TopMenuItem data={el} />)}
        </ul>
    )
}