import React from "react"
import { HeaderBottom } from "./HeaderBottom/HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle/HeaderMiddle"
import { HeaderTop } from "./HeaderTop/HeaderTop"

export const Header = ({ data }) => {
  return (
    <header className="header">
      <HeaderTop data={data.topMenu} />
      <HeaderMiddle data={data.midContacts} logo={data.logo} />
      <HeaderBottom data={data.botMenu} />
    </header>
  )
}