import { CollapseItem } from "./CollapseItem"

export const CollapseMenu = ({data}) => {
    return (
        <div className="navigation__collapse">
            <ul className="navigation__collapse-menu vertical-menu">
                {data?.map(el => <CollapseItem data={el} key={el.id}/>)}
            </ul>
        </div>
    )
}