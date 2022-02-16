export const TopMenuItem = ({id, link, title}) => {
  return (
    <li className="menu__item" key={id}>
      <a href={link} className="link menu__name">
        {title}
      </a>
    </li>
  )
}