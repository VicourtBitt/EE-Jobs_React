import styled from "styled-components";
import LogoImage from "../Styles/LogoImage.styled";
import LogoText from "../Styles/LogoText.styled";
import LogoSVG from "../../assets/images/logo_ee_old.svg"

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 120px;

    
`

function Logo() {
    return (
        <LogoBox>
            <LogoImage
                src={LogoSVG}
                alt="Logo"
            />
            <LogoText>React</LogoText>
        </LogoBox>
    )
}

export default Logo;