export const VerticalMenuItem = () => {
    return (
        <li className="vertical-menu__item">
            <span className="vertical-menu__name">Варежки</span>
            <ul className="vertical-menu__submenu">
                <li className="vertical-menu__submenu-item">
                    <a
                        href="javascript:void(0);"
                        className="link vertical-menu__submenu-name"
                    >
                        Демисезонные
                    </a>
                </li>
                <li className="vertical-menu__submenu-item">
                    <a
                        href="javascript:void(0);"
                        className="link vertical-menu__submenu-name"
                    >
                        Для новорождённых
                    </a>
                </li>
            </ul>
        </li>
    )
}