import { HeaderBottom } from "./HeaderBottom/HeaderBottom"
import { HeaderMiddle } from "./HeaderMiddle/HeaderMiddle"
import { HeaderTop } from "./HeaderTop/HeaderTop"

export const Header = () => {
    return (
        <div className="header">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    )
}