import logo from '../../../assets/images/logo.png
'

export const LogoContainer = () => {
    return (
        <div className="header__col header__col_logo">
            <a href="javascript:void(0);" className="header__logo logo">
                <img src={logo} className="logo__img" alt="img"></img>
            </a>
        </div>
    )
}