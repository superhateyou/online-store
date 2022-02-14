export const FooterBottom = () => {
    return (
        <div className="footer__bottom">
            <div className="container footer__container">
                <div className="footer__bottom-col">
                    <p className="footer__text">
                        Официальный интернет-магазин Lassie® в России
                    </p>
                </div>
                <div className="footer__bottom-col">
                    <div className="footer__text-group">
                        <a href="tel:+78003331204" className="footer__text">
                            8 (800) 333-12-04{" "}
                        </a>
                        <span className="footer__text">(горячая линия)</span>
                    </div>
                    <div className="footer__text-group">
                        <a href="tel:+74952150435" className="footer__text">
                            8 (495) 215-04-35{" "}
                        </a>
                        <span className="footer__text">(ежедневно с 9:00 до 24:00)</span>
                    </div>
                    <a
                        href="mailto:order@lassieshop.ru"
                        className="footer__text footer__text_block"
                    >
                        order@lassieshop.ru
                    </a>
                </div>
            </div>
        </div>
    )
}