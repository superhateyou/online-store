import axios from 'axios';
import React from "react"
import { useEffect, useState } from 'react'
import { IContacts, ILogo } from '../../types/contacts.interface';
import { HeaderBottom } from "./HeaderBottom/HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle/HeaderMiddle"
import { HeaderTop } from "./HeaderTop/HeaderTop"

interface IData {
  topMenu: object[];
  midContacts: IContacts;
  botMenu: object;
  logo: ILogo;
}

export const Header = () => {
  const [header, setHeader] = useState<Record<string, IData>>()

  useEffect(() => {
    axios.get<Record<string, IData>>('/header.json')
      .then(res => setHeader(res.data))
      .catch(err => console.log(err))
  }, [])

  if (!header) {
    return null
}

  return (
    <header className="header">
      <HeaderTop data={header.topMenu} />
      <HeaderMiddle contacts={header.midContacts} logo={header.logo} />
      <HeaderBottom data={header.botMenu} />
    </header>
  )
}