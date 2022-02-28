import axios from 'axios';
import React from "react"
import { useEffect, useState } from 'react'
import { HeaderBottom } from "./HeaderBottom/HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle/HeaderMiddle"
import { HeaderTop } from "./HeaderTop/HeaderTop"

export const Header = () => {
  const [header, setHeader] = useState(undefined)
  useEffect(() => {
    axios.get('/header.json')
      .then(res => setHeader(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <header className="header">
      <HeaderTop data={header && header.topMenu} />
      <HeaderMiddle data={header && header.midContacts} logo={header ? header.logo : undefined} />
      <HeaderBottom data={header && header.botMenu} />
    </header>
  )
}