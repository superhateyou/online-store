import { FooterBottom } from "./FooterBottom"
import { FooterCol } from "./FooterCol"
import { SocialNetworks } from "./SocialNetworks"

export const Footer = ({ data }) => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                {data.footerCols?.map(el => <FooterCol data={el} key={el.id} />)}
                <SocialNetworks data={data && data.networks} />
            </div>
            <FooterBottom data={data.bottom} />
        </footer>
    )
}