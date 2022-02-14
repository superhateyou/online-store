import { Contacts } from "./Contacts"
import { Basket } from "./Basket"
import logo from '../../../assets/images/logo.png'

export const HeaderMiddle = () => {
  return (
    <div className="header__middle">
      <div className="container header__container header__container_middle">
        <div className="header__col header__col_logo">
          <a href="!#" className="header__logo logo">
            <img src={logo} className="logo__img" alt="img"></img>
          </a>
        </div>
        <Contacts />
        <Basket />
      </div>
    </div>
  )
}