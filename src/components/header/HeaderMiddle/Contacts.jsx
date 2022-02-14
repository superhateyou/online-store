export const Contacts = () => {
    return (
        <div className="header__contacts">
            <span className="header__icon icon-comment" />
            <div className="header__col header__col_contacts">
                <div className="contacts">
                    <a href="tel:+74952150435" className="contacts__tel">
                        8 495 215-04-35
                    </a>
                    <div className="contacts__info">с 9:00 до 24:00 ежедневно</div>
                </div>
            </div>
            <div className="header__col header__col_contacts">
                <div className="contacts">
                    <a href="tel:+78003331204" className="contacts__tel">
                        8 800 333-12-04
                    </a>
                    <div className="contacts__info">24 часа 7 дней в неделю</div>
                </div>
            </div>
            <div className="header__col header__col_contacts">
                <a href="!#" className="link">
                    Контактная информация
                </a>
            </div>
        </div>
    )
}