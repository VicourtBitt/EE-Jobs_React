import LogoContent from "../../styles/LogoContent.styled";
import LogoImage from "../../styles/LogoImage.styled";
import LogoText from "../../styles/LogoText.styled";
import WebLogo from "../../assets/logo_ee_old.svg"

function LogoBox () {
    return (
        <LogoContent>
            <LogoImage
                src={WebLogo}
            />

            <LogoText>
                Jobs
            </LogoText>
        </LogoContent>
    )
}

export default LogoBox;