export const SocialNetworks = ({ data }) => {
    return (
        <div className="footer__col">
            <h3 className="footer__title">{data && data.name}</h3>
            <ul className="footer__socials socials">
                {data && data.list.map(el => (
                    <li className="socials__item" key={el.id}>
                        <a href={el.link} className={`${el.short} socials__name`}>
                            <span className={el.icon}></span>
                        </a>
                    </li>
                ))}
            </ul>
            <p className="footer__text">Следи за новостями и акциями
                <br />в социальных сетях. Будь первым!</p>
        </div>
    )
}