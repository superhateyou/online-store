import { HeaderBottom } from "./HeaderBottom/HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle/HeaderMiddle"
import { HeaderTop } from "./HeaderTop/HeaderTop"

export const Header = ({data}) => {
    console.log('here', data)
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </header>
    )
}