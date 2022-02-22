import { Contacts } from "./Contacts"
import { Basket } from "./Basket"
import { Link } from "react-router-dom"

export const HeaderMiddle = ({ data, logo }) => {
  return (
    <div className="header__middle">
      <div className="container header__container header__container_middle">
        <div className="header__col header__col_logo">
          <Link to="*" className="header__logo logo">
            <img src={logo && logo.link}
              id={logo && logo.id}
              className="logo__img"
              alt={logo && logo.alt}></img>
          </Link>
        </div>
        <Contacts data={data} />
        <Basket />
      </div>
    </div>
  )
}