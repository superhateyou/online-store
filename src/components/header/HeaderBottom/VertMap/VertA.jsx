export const VertA = ({ data }) => {
  return (
    <a href={data.link}
      className="vertical-menu__name">
      {data.title}
    </a>
  )
}