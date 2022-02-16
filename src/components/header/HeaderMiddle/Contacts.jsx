export const Contacts = ({ data }) => {
    return (
        <div className="header__contacts">
            <span className="header__icon icon-comment" />
            {data && data.info.map(el => (
                <div className="header__col header__col_contacts"
                    id={el.id}>
                    <div className="contacts">
                        <a href={el.link} className="contacts__tel">
                            {el.title_1}
                        </a>
                        <div className="contacts__info">{el.title_2}</div>
                    </div>
                </div> 
            ))}
            <div className="header__col header__col_contacts">
                <a href={data && data.button.link}
                    id={data && data.button.id}
                    className="link">
                    {data && data.button.title}
                </a>
            </div>
        </div>
    )
}