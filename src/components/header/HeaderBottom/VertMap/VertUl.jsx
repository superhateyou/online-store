export const VertUl = ({ data }) => {
  console.log("here")
  return (
    <ul className="vertical-menu__submenu">
      <li className="vertical-menu__submenu-item">
        <a href="!#"
          className="link vertical-menu__submenu-name">
          Демисезонные
        </a>
      </li>
      <li className="vertical-menu__submenu-item">
        <a href="!#"
          className="link vertical-menu__submenu-name">
          Для новорождённых
        </a>
      </li>
    </ul>
  )
}