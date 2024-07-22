import styled from "styled-components";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 140px;
    width: 100%;
    background: #6C757D;
`

function Header() {
    return (
        <HeaderBox>
            <Logo/>
            <Navigation />
        </HeaderBox>
    )
}

export default Header;