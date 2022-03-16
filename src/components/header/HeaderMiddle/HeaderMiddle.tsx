import { Link } from "react-router-dom"
import React from "react"
import { Contacts } from "./Contacts"
import { Basket } from "./Basket"
import { IContacts, ILogo } from "../../../types/contacts.interface";

export interface IProps {
  contacts: IContacts;
  logo: ILogo
}

export const HeaderMiddle = ({ contacts, logo }: IProps) => {
  return (
    <div className="header__middle">
      <div className="container header__container header__container_middle">
        <div className="header__col header__col_logo">
          <Link to="/" className="header__logo logo">
            <img src={logo && logo.link}
              id={logo && logo.id}
              className="logo__img"
              alt={logo && logo.alt}></img>
          </Link>
        </div>
        <Contacts contacts={contacts} />
        <Basket />
      </div>
    </div>
  )
}