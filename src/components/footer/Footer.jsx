import axios from 'axios';
import React from "react"
import { useEffect, useState } from 'react'
import { FooterBottom } from "./FooterBottom"
import { FooterCol } from "./FooterCol"
import { SocialNetworks } from "./SocialNetworks"

export const Footer = ({ data }) => {
  const [footer, setFooter] = useState(undefined)

  useEffect(() => {
    axios.get('/footer.json')
      .then(res => setFooter(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <footer className="footer">
      <div className="container footer__container">
        {footer ? footer.footerCols?.map(el => <FooterCol data={el} key={el.id} />) : undefined}
        <SocialNetworks data={footer && footer.networks} />
      </div>
      <FooterBottom data={footer && footer.bottom} />
    </footer>
  )
}
