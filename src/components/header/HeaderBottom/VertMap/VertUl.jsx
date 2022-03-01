export const VertUl = ({ data }) => {
  return (
    <ul className="vertical-menu__submenu">
      {data && data.list.map(el => (
        <li className="vertical-menu__submenu-item" key={el.id}>
          <a href={el.link}
            className="link vertical-menu__submenu-name">
            {el.title}
          </a>
        </li>
      ))}
    </ul>
  )
}