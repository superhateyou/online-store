export const TopMenuItem = ({data}) => {
  return (
    <li className="menu__item" key={data}>
      <a href="!#" className="link menu__name">
        {data}
      </a>
    </li>
  )
}