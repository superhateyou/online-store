import { VertMap } from "./VertMap/VertMap"

export const VertMenuItem = ({ data }) => {
  return (<li className="vertical-menu__item">
    {data && data?.map(el => {
      const ComponentName = VertMap.get(el.type)
      return <ComponentName data={el} />
    })}
  </li>
  )
}