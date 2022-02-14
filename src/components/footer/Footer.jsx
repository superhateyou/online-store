import { FooterBottom } from "./FooterBottom"
import { FooterCol } from "./FooterCol"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <FooterCol />
                <FooterCol />
                <FooterCol />
            </div>
            <FooterBottom />
        </footer>
    )
}