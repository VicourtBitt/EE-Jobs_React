import HeaderBox from "../../styles/HeaderBox.styled";
import LogoBox from "../Logo";
import BtnNavDropDown from "../../styles/BtnDropDown.styled";
import NavigationList from "../NavigationList";

function Header () {
    return (
        <HeaderBox>
            <LogoBox />

            <BtnNavDropDown id="btnDropDown">
                ☰
            </BtnNavDropDown>

            <NavigationList />
        </HeaderBox>
    )
}

export default Header;