export const TopMenuItem = ({ data }) => {
  return (
    <li className="menu__item">
      <a href={data.link} className="link menu__name">
        {data.title}
      </a>
    </li>
  )
}