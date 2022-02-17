import { NavCollapse } from './NavCollapse'
import { CollapseButton } from './CollapseButton'

export const HeaderBottom = () => {
    return (
        <div className="header__bottom">
            <div className="container">
                <nav className="header__nav navigation">
                    <ul className="header__menu menu menu_width_full">

                    </ul>
                    <CollapseButton />
                    <NavCollapse />
                </nav>
            </div>
        </div>
    )
}