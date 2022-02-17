export const FooterBottom = ({ data }) => {
  return (
    <div className="footer__bottom">
      <div className="container footer__container">
        <div className="footer__bottom-col">
          <p className="footer__text">
            {data && data.footerText}
          </p>
        </div>
        <div className="footer__bottom-col">
          {data && data.numbers.map(el => (
            <div className="footer__text-group"
              key={el.id}>
              <a href={el.link} className="footer__text">
                {el.phone}
              </a>
              <span className="footer__text">{el.title}</span>
            </div>
          ))}
          <a href={data && data.order.link}
            key={data && data.order.id}
            className="footer__text footer__text_block">
            {data && data.order.title}
          </a>
        </div>
      </div>
    </div>
  )
}