import { TopMenuItem } from "./TopMenuItem"

export const TopMenu = ({ data }) => {
    return (
        <ul className="header__top-menu menu">
            {data?.map(el => <TopMenuItem id={el.id} link={el.link} title={el.title} />)}
        </ul>
    )
}