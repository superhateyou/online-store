import React from "react"
import { IContacts } from "../../../types/contacts.interface"

interface Props {
  contacts: IContacts
}

export const Contacts = ({ contacts }: Props) => {
  return (
    <div className="header__contacts">
      <span className="header__icon icon-comment" />
      {contacts && contacts.info.map(el => (
        <div className="header__col header__col_contacts"
          key={el.id}>
          <div className="contacts">
            <a href={el.link} className="contacts__tel">
              {el.title_1}
            </a>
            <div className="contacts__info">{el.title_2}</div>
          </div>
        </div>
      ))}
      <div className="header__col header__col_contacts">
        <a href={contacts && contacts.button.link}
          id={contacts && contacts.button.id}
          className="link">
          {contacts && contacts.button.title}
        </a>
      </div>
    </div>
  )
}