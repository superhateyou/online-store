export const FooterCol = ({ data }) => {
    return (
        <div className="footer__col">
            <h3 className="footer__title">{data && data.name}</h3>
            <ul className="list">
                {data && data.list.map(el => (
                    <li className="list__item" id={el.id}>
                        <a href={el.link} className="footer__text">
                            {el.title}{el.symbol ? <sup>®</sup> : ''}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}