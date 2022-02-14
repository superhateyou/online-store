import { NavCollapsePart } from "./NavCollapsePart"

export const NavCollapse = () => {
    return (
        <div className="navigation__collapse">
             <ul className="navigation__collapse-menu vertical-menu">
                <NavCollapsePart />
             </ul>
        </div>
    )
}